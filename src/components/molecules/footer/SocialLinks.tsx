import { mdiInstagram } from '@mdi/js';
import Icon from '@mdi/react';

import { Link } from '@/components/atoms';
import { icons } from '@/utils';
import { styled } from '~/stitches';

const SocialLinksContainer = styled('ul', {
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

const SocialLink = styled(Link, {
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
    backgroundColor: 'rgba($colors$toolbar-glow / .1)',
    color: '$text-secondary',
    textDecoration: 'none',
  },
});

const GitHubLink = styled(SocialLink, {
  hocus: {
    color: '#333',
    dark: {
      color: '#ebebeb',
    },
  },
});

const LinkedInLink = styled(SocialLink, {
  hocus: {
    color: '#0077b5',
    dark: {
      color: '#0077b5',
    },
  },
});

const TwitterLink = styled(SocialLink, {
  hocus: {
    color: '#1da1f2',
    dark: {
      color: '#1da1f2',
    },
  },
});

const InstagramLink = styled(SocialLink, {
  hocus: {
    color: '#d6249f',
    dark: {
      color: '#d6249f',
    },
  },
});

const PolyworkLink = styled(SocialLink, {
  hocus: {
    color: '#6959fc',
    dark: {
      color: '#6959fc',
    },
  },
});

const iconSize = 0.9;
export const SocialLinks = () => {
  return (
    <SocialLinksContainer aria-label={'Social links'}>
      <li>
        <GitHubLink title={'GitHub'} href={'https://github.com/jahirfiquitiva'}>
          <Icon path={icons.gitHubOutline} size={iconSize} />
        </GitHubLink>
      </li>
      <li>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
        >
          <Icon path={icons.linkedInOutline} size={iconSize} />
        </LinkedInLink>
      </li>
      <li>
        <TwitterLink
          title={'Twitter'}
          href={'https://twitter.com/jahirfiquitiva'}
        >
          <Icon path={icons.twitterOutline} size={iconSize} />
        </TwitterLink>
      </li>
      <li>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/jahirfiquitiva'}
        >
          <Icon path={mdiInstagram} size={iconSize} />
        </InstagramLink>
      </li>
      <li>
        <PolyworkLink
          title={'Polywork Timeline'}
          href={'https://timeline.jahir.dev'}
        >
          <Icon path={icons.polywork} size={iconSize} />
        </PolyworkLink>
      </li>
    </SocialLinksContainer>
  );
};
