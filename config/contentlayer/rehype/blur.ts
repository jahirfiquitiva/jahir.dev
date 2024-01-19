// Code based on https://github.com/nikolovlazar/nikolovlazar.com/blob/main/src/utils/plugins/image-metadata.ts
import { readFile } from 'node:fs/promises';
import path from 'path';

import { getPlaiceholder } from 'plaiceholder';
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

interface BlurResult {
  width: number;
  height: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export const getBlurData = async (
  imageSrc?: string,
  placeholderSize: number = 10,
  defaultWidth: number = 0,
  defaultHeight: number = 0,
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

    const blur = await getPlaiceholder(imgBuffer, { size: placeholderSize });
    return {
      width:
        defaultWidth > 0
          ? Math.min(defaultWidth, blur.metadata.width)
          : blur.metadata.width || defaultWidth,
      height:
        defaultHeight > 0
          ? Math.min(defaultHeight, blur.metadata.height)
          : blur.metadata.height || defaultHeight,
      blurDataURL: blur.base64,
      placeholder: 'blur',
    };
  } catch (e) {
    return null;
  }
};

interface ImageNode {
  type: 'mdxJsxFlowElement' | 'element' | string;
  name: 'img' | string;
  tagName: 'img' | string;
  properties: {
    src: string;
    height?: number;
    width?: number;
    blurDataURL?: string;
    placeholder?: 'blur' | 'empty';
  } & Record<string, unknown>;
  attributes?: Array<{
    type: 'mdxJsxAttribute' | string;
    name: 'src' | string;
    value: unknown;
  }>;
  children?: Array<ImageNode>;
  parent?: ImageNode;
}

const isImageNode = (node: Node): node is ImageNode => {
  const img = node as ImageNode;
  const isJsxImage =
    img.type === 'mdxJsxFlowElement' &&
    (img.name === 'img' || img.name === 'Img');
  if (isJsxImage)
    return Boolean(img.attributes?.find((it) => it.name === 'src')?.value);
  const isNormalImage = img.type === 'element' && img.tagName === 'img';
  return (
    isNormalImage &&
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    img.properties &&
    typeof img.properties.src === 'string'
  );
};

const getSrcFromImageNode = (
  node?: ImageNode,
): {
  src: string;
  width?: number;
  height?: number;
} | null => {
  if (!node) return null;
  const isJsxImage = node.type === 'mdxJsxFlowElement' && node.name === 'img';
  const isNormalImage = node.type === 'element' && node.tagName === 'img';
  let src = '';
  let w = 0;
  let h = 0;
  if (isJsxImage) {
    src =
      node.attributes?.find((it) => it.name === 'src')?.value?.toString() || '';
    w = Number(
      node.attributes?.find((it) => it.name === 'width')?.value?.toString() ||
        '0',
    );
    h = Number(
      node.attributes?.find((it) => it.name === 'height')?.value?.toString() ||
        '0',
    );
  } else if (isNormalImage) {
    src = node.properties.src;
    w = node.properties.width || 0;
    h = node.properties.height || 0;
  }
  return {
    src: src.replace(/["']/g, '').replace(/%22/g, ''),
    width: w,
    height: h,
  };
};

const addProps = async (node: ImageNode): Promise<ImageNode> => {
  const { src, width, height } = getSrcFromImageNode(node) || {};
  if (!src) return node;
  const res = await getBlurData(src, 10, width, height).catch(() => null);
  if (!res) return node;
  const isJsxImage = node.type === 'mdxJsxFlowElement' && node.name === 'img';
  if (isJsxImage) {
    node.name = 'Img';
    const newProps = Object.keys(res).map((prop) => ({
      type: 'mdxJsxAttribute',
      name: prop,
      value: res[prop as keyof typeof res],
    })) as ImageNode['attributes'];
    const unique = [...(node.attributes || []), ...(newProps || [])].reduce(
      (prev, o) =>
        prev?.some((x) => x.name === o.name) ? prev : [...(prev || []), o],
      [] as ImageNode['attributes'],
    );
    node.attributes = unique;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    node.properties = { ...(node.properties || {}), ...res };
  }
  return node;
};

const imageBlurMetadata = () => {
  return async (tree: Node) => {
    const images: ImageNode[] = [];
    // Traverse elements
    visit(tree, ['mdxJsxFlowElement', 'element'], (node) => {
      const typedNode = node as ImageNode;
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (typedNode && isImageNode(typedNode)) images.push(typedNode);
    });
    for (const image of images) {
      await addProps(image);
    }
    return tree;
  };
};

export default imageBlurMetadata;
