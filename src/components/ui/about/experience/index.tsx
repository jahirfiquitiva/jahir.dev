import bpsmart from '@/assets/images/experience/bpsmart.jpeg';
import msco from '@/assets/images/experience/msco.jpeg';
import nwyc from '@/assets/images/experience/nwyc.jpeg';
import servex from '@/assets/images/experience/servex.jpeg';
import { Section } from '@/components/atoms/section';

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
    position: 'Full-Stack Developer',
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
      <h2>Experience</h2>
      <ol className={'flex flex-col gap-1.5 -mb-4'}>
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
