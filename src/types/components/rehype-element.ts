export interface RehypeElement {
  type: string;
  tagName?: string;
  value?: string;
  properties?: {
    className?: string;
  };
  children?: Array<RehypeElement>;
}
