import contactImage from '@/assets/images/contact/0.png';
import { Img } from '@/components/atoms/img';
import { Section } from '@/components/atoms/section';
import { Clock } from '@/components/molecules/footer/now-playing/time';
import { SocialLinks } from '@/components/molecules/social-links';
import { getColoredTextClasses } from '@/utils/colored-text';
import { createMetadata } from '@/utils/metadata';

export default function ContactPage() {
  return (
    <Section id={'contact'} className={'flex-1 gap-6'}>
      <h1 className={getColoredTextClasses('green', 'self-start')}>
        Get in Touch!
      </h1>
      <div className={'grid grid-cols-1 tablet-sm:grid-cols-2 gap-5'}>
        <Clock longFormat>
          <p>
            Feel free to send me a message, I will get back to you as soon as
            possible.
          </p>
        </Clock>
        <SocialLinks extended />
      </div>
      <Img
        src={contactImage}
        alt={
          'Illustration of a person holding a phone and a t-shirt that reads "Hi"'
        }
        className={'max-w-64 mx-auto shadow-white/50 drop-shadow-doodle mt-12'}
      />
    </Section>
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
