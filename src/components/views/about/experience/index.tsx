import bpsmart from '@/assets/images/experience/bpsmart.jpeg';
import msco from '@/assets/images/experience/msco.jpeg';
import nwyc from '@/assets/images/experience/nwyc.jpeg';
import servex from '@/assets/images/experience/servex.jpeg';
import { Icon } from '@/components/icon';
import { LinkButton } from '@/components/link-button';
import { Section } from '@/components/section';
import { getColoredTextClasses } from '@/utils/colored-text';

import {
  ExpItem,
  type ExperienceItemProps as ExperienceRecord,
} from './exp-item';

const experience: Array<ExperienceRecord> = [
  {
    company: 'National Write Your Congressman, Inc.',
    position: 'Frontend Engineer',
    from: 'Mar 2023',
    link: 'https://www.nwyc.com/',
    image: nwyc,
    color: '#2E4C94',
  },
  {
    company: 'Matter Supply Co.',
    position: 'Software Engineer',
    from: 'Sep 2020',
    until: 'Nov 2022',
    link: 'https://mattersupply.co/',
    image: msco,
    color: '#4C4C59',
  },
  {
    company: 'BPSmart',
    position: 'Technical Development Lead',
    from: 'Jan 2020',
    until: 'Aug 2020',
    link: 'https://www.bpsmart.ai/',
    image: bpsmart,
    color: '#8FD554',
  },
  {
    company: 'Servex',
    position: 'Full Stack Developer',
    from: 'Sep 2018',
    until: 'Dec 2019',
    link: 'https://www.servex.com.pe/',
    image: servex,
    color: '#4AA1D1',
    last: true,
  },
];

export const Experience = () => {
  return (
    <Section id={'experience'} className={'gap-6'}>
      <div className={'flex flex-row gap-4 items-center justify-between'}>
        <h2 className={getColoredTextClasses('blue', 'blue', 'brand', false)}>
          Experience
        </h2>
        <LinkButton
          title={'Resume'}
          href={'/resume'}
          openInNewTab
          className={'self-start pr-4'}
          data-umami-event={'Resume'}
        >
          <Icon
            className={'size-5'}
            path={
              // eslint-disable-next-line max-len
              'm20.7 6.8-5.5-5.5c-.2-.2-.4-.3-.7-.3H6C4.3 1 3 2.3 3 4v16c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3V7.5c0-.3-.1-.5-.3-.7zm-2.6.2H15V3.9L18.1 7zM18 21H6c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h7v5c0 .6.4 1 1 1h5v11c0 .6-.4 1-1 1zm-1-8c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1zm0 4c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1zM7 9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1-.4-1-1z'
            }
          />
          <span>Resume</span>
        </LinkButton>
      </div>
      <ol className={'flex flex-col gap-1.5'}>
        {experience.map((exp) => {
          return (
            <li key={exp.company}>
              <ExpItem {...exp} />
            </li>
          );
        })}
      </ol>
    </Section>
  );
};
