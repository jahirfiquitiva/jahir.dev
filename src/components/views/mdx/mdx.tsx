import { useMDXComponent } from 'next-contentlayer/hooks';

import styles from './mdx.module.scss';

interface MdxProps {
  code: string;
}

export const Mdx = (props: MdxProps) => {
  const MdxComponent = useMDXComponent(props.code);

  return (
    <article className={styles.article}>
      <MdxComponent />
    </article>
  );
};
