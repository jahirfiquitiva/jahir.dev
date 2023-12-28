// Code based on https://github.com/nikolovlazar/nikolovlazar.com/blob/main/src/utils/plugins/image-metadata.ts
import { readFile } from 'node:fs/promises';
import path from 'path';

import sizeOf from 'image-size';
import { getPlaiceholder } from 'plaiceholder';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

interface ImageNode {
  name: string;
  type: 'element' | string;
  tagName: 'img' | string;
  properties: {
    src: string;
    height?: number;
    width?: number;
    blurDataURL?: string;
    placeholder?: 'blur' | 'empty';
    loading?: 'lazy' | 'eager';
  } & Record<string, unknown>;
  attributes?: Array<{
    type: string;
    name: string;
    value: {
      type: string;
      value: unknown;
    };
  }>;
  children?: Array<ImageNode>;
  parent?: ImageNode;
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
  size: {
    width: number;
    height: number;
  };
  blur64?: string;
}

export const getBlurData = async (
  imageSrc?: string,
  placeholderSize: number = 12,
): Promise<BlurResult | null> => {
  if (!imageSrc) return null;
  const isExternal = imageSrc.startsWith('http');

  try {
    let imgBuffer: Buffer | undefined = undefined;
    if (!isExternal) {
      const filePath = path.join(process.cwd(), 'public', imageSrc);
      imgBuffer = await readFile(filePath);
    } else {
      const imageRes = await fetch(imageSrc);
      const arrayBuffer = await imageRes.arrayBuffer();
      imgBuffer = Buffer.from(arrayBuffer);
    }

    const size = await sizeOf(imgBuffer);
    const blur = await getPlaiceholder(imgBuffer, { size: placeholderSize });

    const result = {
      size: {
        width: size?.width || blur.metadata.width || 0,
        height: size?.height || blur.metadata.height || 0,
      },
      blur64: blur.base64,
    };
    return result;
  } catch (e) {
    console.error(`Error processing image: "${imageSrc}"`);
    console.error(e);
    return null;
  }
};

const addProps = async (node: ImageNode): Promise<ImageNode> => {
  const src = node.properties.src.replace(/["']/g, '').replace(/%22/g, '');
  const res = await getBlurData(src).catch(() => null);
  if (!res) return node;
  node.properties = {
    ...(node.properties || {}),
    width: res.size.width,
    height: res.size.height,
    blurDataURL: res.blur64,
    placeholder: 'blur',
    loading: 'lazy',
  };
  return node;
};

const imageMetadata = () => {
  return async (tree: Node) => {
    const images: ImageNode[] = [];

    // Traverse elements
    visit(tree, ['mdxJsxFlowElement', 'element'], (node) => {
      const typedNode = node as ImageNode;
      if (typedNode && isImageNode(typedNode)) images.push(typedNode);
    });

    for (const image of images) {
      await addProps(image);
    }
    return tree;
  };
};

export default imageMetadata;
