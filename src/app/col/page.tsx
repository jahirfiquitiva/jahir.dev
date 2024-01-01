import { TechStack } from '@/components/views/colophon/tech-stack';
import { Typography } from '@/components/views/colophon/typography';
import { getColoredTextClasses } from '@/utils/colored-text';

export default function Colophon() {
  return (
    <>
      <h1
        className={getColoredTextClasses(
          'brand',
          'brand',
          'blue',
          'self-start -mb-10',
        )}
      >
        Colophon
      </h1>
      <TechStack />
      <Typography />
    </>
  );
}
