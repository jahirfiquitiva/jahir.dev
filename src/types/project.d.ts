export interface Project {
  order: number;
  name: string;
  description: string;
  icon: string;
  preview?: string;
  link: string;
  color?: string;
  darkColor?: string;
  tag?: string;
  stack?: Array<string>;
  hide?: boolean;
  repo?: string;
  owner?: string;
  iconMeta?: {
    height?: number;
    width?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
  };
}
