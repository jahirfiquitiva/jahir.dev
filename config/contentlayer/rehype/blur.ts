// Code based on https://github.com/nikolovlazar/nikolovlazar.com/blob/main/src/utils/plugins/image-metadata.ts
import type { Node } from 'unist';
import { visit } from 'unist-util-visit';

import { getBlurData } from './../../../src/utils/img-blur';

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
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    img.properties &&
    typeof img.properties.src === 'string'
  );
};

const addProps = async (node: ImageNode): Promise<ImageNode> => {
  const src = node.properties.src.replace(/["']/g, '').replace(/%22/g, '');
  const res = await getBlurData(src).catch(() => null);
  if (!res) return node;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  node.properties = { ...(node.properties || {}), ...res };
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
