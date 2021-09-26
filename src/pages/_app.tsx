/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
import { ThemeProvider } from '~/providers/theme';
import '~/styles/global.css';

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <TinaEditProvider
        editMode={
          <TinaCMS
            clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
            branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
            organization={process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
            isLocalClient={Boolean(
              Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true),
            )}
            cmsCallback={(cms) => {
              import('react-tinacms-editor').then((field) => {
                cms.plugins.add(field.MarkdownFieldPlugin);
              });
            }}
            {...pageProps}
          >
            {/* @ts-ignore */}
            {(livePageProps) => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </ThemeProvider>
  );
};

export default App;
