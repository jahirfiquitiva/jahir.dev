import { Link } from '@/components/atoms/link';

import { CodeImage } from './code.image';

export const Coding = () => (
  <div className={'flex flex-col gap-5'}>
    <p>
      I use{' '}
      <Link
        title={'Visual Studio Code'}
        href={'https://code.visualstudio.com/'}
      >
        Visual Studio Code
      </Link>{' '}
      as my primary editor, along with the{' '}
      <Link
        title={'Pace Theme'}
        href={'https://github.com/fabian-hiller/vscode-pace-theme'}
      >
        Pace Theme
      </Link>{' '}
      and the{' '}
      <Link title={'MonoLisa'} href={'https://monolisa.dev/'}>
        MonoLisa
      </Link>{' '}
      font with ligatures and italics enabled.
    </p>
    <CodeImage />
  </div>
);
