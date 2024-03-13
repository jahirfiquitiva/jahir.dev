import { Logo } from '@/components/atoms/logo';

const pathEmojiMap = {
  '404': '👻',
  about: '😀',
  now: 'ℹ️',
  donate: '🎁',
  projects: '💼',
  uses: '💻',
  blog: '📄',
  colophon: '🛠️',
};
export type PathName = keyof typeof pathEmojiMap | null;

const pathTitleMap = {
  '404': 'Page not found',
  about: 'About',
  now: 'Now',
  donate: 'Donate',
  projects: 'Projects',
  uses: 'Uses',
  blog: 'Blog',
  colophon: 'Colophon',
};

const titleFontSize = 64;
export const LogoOrEmoji = (props: { path?: PathName }) => {
  const emoji = props.path ? pathEmojiMap[props.path] : null;
  if (!emoji) {
    return (
      <Logo
        style={{
          width: titleFontSize * 2,
          height: titleFontSize * 2,
          filter: 'saturate(1.5)',
          color: '#88a4e6',
          fill: '#88a4e6',
        }}
      />
    );
  }
  return <span style={{ fontSize: titleFontSize }}>{emoji}</span>;
};

export const PageTitle = (props: {
  path?: PathName;
  title?: string | null;
}) => {
  const { path, title } = props;
  const pathTitle = path ? pathTitleMap[path] || null : null;
  return (
    <p
      style={{
        alignSelf: 'flex-start',
        fontSize: titleFontSize,
        fontWeight: 700,
        maxWidth: 900,
        color: path ? 'white' : 'rgba(0, 0, 0, 0)',
        ...(path
          ? {}
          : {
              color: '#88a4e6',
              filter: 'saturate(1.5)',
            }),
      }}
    >
      {title || pathTitle || 'Jahir Fiquitiva'}
    </p>
  );
};
