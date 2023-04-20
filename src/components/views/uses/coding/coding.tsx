import { Link } from '@/components/core/link';
import { NoPaddingSection } from '@/components/core/section';

import { CodeImage } from './code.image';

export const Coding = () => {
  return (
    <NoPaddingSection $as={'div'}>
      <p>
        I use{' '}
        <Link title={'VSCodium'} href={'https://vscodium.com/'}>
          VSCodium
        </Link>{' '}
        as my primary editor, with a custom layout using the{' '}
        <Link
          title={'Customize UI Extension'}
          href={'https://github.com/lehni/customize-ui'}
        >
          Customize UI
        </Link>{' '}
        extension. I also use the{' '}
        <Link
          title={'Pace Theme'}
          href={'https://github.com/fabian-hiller/vscode-pace-theme'}
        >
          Pace Theme
        </Link>{' '}
        with it and the{' '}
        <Link title={'MonoLisa'} href={'https://monolisa.dev/'}>
          MonoLisa
        </Link>{' '}
        font with ligatures and italics enabled.
      </p>
      <CodeImage />
    </NoPaddingSection>
  );
};
