import styled from '@emotion/styled';
import { mdiLightbulbOnOutline } from '@mdi/js';

import { Component } from '~/elements/base/fc';
import { Field } from '~/elements/simple/field';
import { Heading } from '~/elements/simple/heading';
import { mediaQueries } from '~/types';

const BlogIdeasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.8rem;
  border-radius: 10px;
  padding: 1.8rem 1.6rem 1.4rem;
  background-color: var(--primary);
  border: 1px dashed var(--accent-light);

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    grid-column-gap: 1.2rem;
    grid-row-gap: 1rem;
  }
`;

export const BlogIdeas: Component = () => {
  return (
    <BlogIdeasContainer>
      <div>
        <Heading size={'5'} gradientColor={'green-to-yellow'}>
          Let&apos;s build an awesome blog together!
        </Heading>
        <p style={{ marginTop: '0.6rem' }}>
          I&apos;m honestly not the kind of person who blogs much, but I&apos;d
          like to do it more frequently.
        </p>
        <p>
          Feel free to share ideas or topics for me to blog about. I&apos;d
          really appreciate it! 🙌
        </p>
      </div>

      <Field
        tag={'textarea'}
        label={'Ideas'}
        iconPath={mdiLightbulbOnOutline}
        placeholder={'What should I blog about next?'}
        hideLabel
      />
    </BlogIdeasContainer>
  );
};
