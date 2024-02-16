import type { Node as BaseNode } from 'unist';
import { visit } from 'unist-util-visit';

interface Node extends BaseNode {
  tagName?: string;
  name?: string;
  children?: Array<Node>;
}

const unwrapFigure = () => {
  return async (tree: Node) => {
    visit(tree, ['mdxJsxFlowElement', 'element'], (node) => {
      const tag = node.tagName || node.name;
      if (tag === 'figure') {
        const { children = [] } = node;
        if (children.length === 1) {
          const [child] = children;
          const childTag = child.tagName || child.name;
          if (childTag === 'p') node.children = child.children;
        }
      }
    });
    return tree;
  };
};

export default unwrapFigure;
