/* eslint-disable import/no-extraneous-dependencies */
// Code taken from https://github.com/nikolovlazar/nikolovlazar.com/blob/main/src/utils/plugins/image-metadata.ts
import path from 'path';
import { promisify } from 'util';

import imageSize from 'image-size';
import { ISizeCalculationResult } from 'image-size/dist/types/interface';
import { getPlaiceholder } from 'plaiceholder';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';

const sizeOf = promisify(imageSize);
interface ImageNode {
  type: 'element';
  tagName: 'img';
  properties: {
    src: string;
    height?: number;
    width?: number;
    blurDataURL?: string;
    placeholder?: 'blur' | 'empty';
  };
}

const isImageNode = (node: Node): node is ImageNode => {
  const img = node as ImageNode;
  return (
    img.type === 'element' &&
    img.tagName === 'img' &&
    img.properties &&
    typeof img.properties.src === 'string'
  );
};

interface BlurResult {
  size: { width: number; height: number };
  blur64?: string;
}

export const getBlurData = async (
  imageSrc?: string,
): Promise<BlurResult | null> => {
  if (!imageSrc) return null;
  let res: ISizeCalculationResult | undefined;
  let blur64: string;
  const isExternal = imageSrc.startsWith('http');

  if (!isExternal) {
    res = await sizeOf(path.join(process.cwd(), 'public', imageSrc));
    blur64 = (await getPlaiceholder(imageSrc)).base64;
  } else {
    const imageRes = await fetch(imageSrc);
    const arrayBuffer = await imageRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res = await imageSize(buffer);
    blur64 = (await getPlaiceholder(buffer)).base64;
  }

  if (!res) throw Error(`Invalid image with src "${imageSrc}"`);
  return {
    size: { width: res.width || 0, height: res.height || 0 },
    blur64,
  };
};

const addProps = async (node: ImageNode): Promise<void> => {
  const res = await getBlurData(node.properties.src).catch(() => null);
  if (!res) return;

  node.properties.width = res.size.width;
  node.properties.height = res.size.height;

  node.properties.blurDataURL = res.blur64;
  node.properties.placeholder = 'blur';
};

const imageMetadata = () => {
  return async function transformer(tree: Node): Promise<Node> {
    const images: ImageNode[] = [];

    visit(tree, 'element', (node) => {
      if (isImageNode(node)) {
        images.push(node);
      }
    });

    for (const image of images) {
      await addProps(image);
    }

    return tree;
  };
};

export default imageMetadata;
