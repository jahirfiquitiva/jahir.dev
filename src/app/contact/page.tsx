import { Section } from '@/components/atoms/section';
import { Clock } from '@/components/molecules/footer/now-playing/time';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

import { ContactForm } from './form';

export default function ContactPage() {
  return (
    <>
      <Section id={'uses'} className={'flex-1 gap-6'}>
        <h1 className={getColoredTextClasses('green', 'self-start')}>
          Contact
        </h1>
        <Clock longFormat>
          Feel free to send me a message, I will get back to you as soon as
          possible.
        </Clock>
        <ContactForm />
      </Section>
    </>
  );
}

export const metadata = createMetadata({
  title: 'Contact – Jahir Fiquitiva',
  description:
    // eslint-disable-next-line @stylistic/max-len
    'Get in touch with Jahir Fiquitiva for any kind of questions, project inquiries and/or networking.',
  exactUrl: 'https://jahir.dev/contact',
  keywords: [
    'contact ',
    'collaborate',
    'inquiry',
    'get in touch',
    'software engineer',
    'project',
    'professional',
    'connect',
    'services',
    'reach out',
  ],
});
