export interface ProjectProps {
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
  slug?: string;
}
