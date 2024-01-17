import darkCode from '@/assets/images/code/code-dark.png';
import lightCode from '@/assets/images/code/code-light.png';
import type { ImgProps } from '@/components/atoms/img';
import { Img } from '@/components/atoms/img';
import cx, { tw } from '@/utils/cx';

const CodeImg = tw(Img)<ImgProps>`
  h-full w-full
  absolute
  transition
  select-none
`;

export const CodeImage = () => (
  <figure>
    <div
      className={cx(
        'aspect-video relative',
        'tablet-md:rounded-4',
        'overflow-hidden',
        '-mx-3 tablet-md:-mx-4',
      )}
    >
      <CodeImg
        src={lightCode}
        alt={"Preview of Jahir's VSCode configuration with Light theme"}
        quality={100}
        placeholder={'blur'}
        className={'opacity-100 visible dark:opacity-0 dark:invisible'}
      />
      <CodeImg
        src={darkCode}
        alt={"Preview of Jahir's VSCode configuration with Dark theme"}
        quality={100}
        placeholder={'blur'}
        className={'opacity-0 invisible dark:opacity-100 dark:visible'}
        aria-hidden={'true'}
      />
    </div>
    <figcaption>Preview of Jahir&apos;s VSCode configuration</figcaption>
  </figure>
);
