import { Link } from '@/components/core';
import { styled } from '~/stitches';

export const SocialLinksContainer = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '$6',
  ml: '-$6',
  marginInline: 0,
  marginBlock: 0,
  paddingInline: 0,
  '& > li': { display: 'block', height: '30px', width: '30px' },
});

export const SocialLink = styled(Link, {
  padding: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30px',
  width: '30px',
  borderRadius: '$space$6',
  color: '$text-tertiary',
  textDecoration: 'none',
  hocus: {
    backgroundColor: 'rgba($colors$accent-shadow / .1)',
    color: '$text-secondary',
    textDecoration: 'none',
  },
});

export const GitHubLink = styled(SocialLink, {
  hocus: {
    color: '#333',
    dark: {
      color: '#ebebeb',
    },
  },
});

export const LinkedInLink = styled(SocialLink, {
  hocus: {
    color: '#0077b5',
    dark: {
      color: '#0077b5',
    },
  },
});

export const TwitterLink = styled(SocialLink, {
  hocus: {
    color: '#1da1f2',
    dark: {
      color: '#1da1f2',
    },
  },
});

export const InstagramLink = styled(SocialLink, {
  hocus: {
    color: '#d6249f',
    dark: {
      color: '#d6249f',
    },
  },
});

export const PolyworkLink = styled(SocialLink, {
  hocus: {
    color: '#6959fc',
    dark: {
      color: '#6959fc',
    },
  },
});

export const MastodonLink = styled(SocialLink, {
  hocus: {
    color: '#563ACC',
    dark: {
      color: '#6364FF',
    },
  },
});
