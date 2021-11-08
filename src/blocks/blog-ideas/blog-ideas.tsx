/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from '@emotion/styled';
import { mdiLightbulbOnOutline, mdiMessageArrowRightOutline } from '@mdi/js';
import { useState, useEffect } from 'react';

import { Component } from '~/elements/base/fc';
import { Field } from '~/elements/simple/field';
import { Heading } from '~/elements/simple/heading';
import { formium } from '~/lib/formium';
import Button from '~/new-components/atoms/simple/button';
import { mediaQueries } from '~/types';

const BlogIdeasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.8rem;
  border-radius: 8px;
  padding: 1.2rem;
  margin-bottom: var(--content-bottom-margin);
  background-color: var(--primary);
  border: 1px dashed var(--accent-light);

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.2rem;
    grid-row-gap: 1rem;
  }
`;

const BlogIdeasForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > div:first-of-type {
    padding-top: 0;
    & > textarea {
      margin-top: 0;
    }
  }
`;

const BlogIdeasField = styled(Field)`
  height: 100%;

  & > div {
    flex: 1;
    & textarea {
      height: 100%;
    }
  }
`;

const VisibleToastStyled = `
  min-height: 42px;
  height: auto;
  max-height: unset;
  border: 1px solid var(--divider);
  padding: 0.4rem 0.8rem;
  text-align: start;
  font-size: unset;
  color: var(--text-primary);
`;

const BlogIdeasSubmitWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column-reverse;

  ${mediaQueries.tablet.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & p {
    opacity: 0;
    height: 0;
    max-height: 0;
    pointer-events: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    margin-top: 0.8rem;
    text-align: center;
    font-size: 2px;
    color: rgba(0, 0, 0, 0);

    &.success {
      background-color: var(--toast-success);
    }

    &.error {
      background-color: var(--toast-error);
    }

    &.visible {
      ${VisibleToastStyled}
      opacity: 1;
    }

    ${mediaQueries.tablet.sm} {
      ${VisibleToastStyled}
      margin-top: 0;
      justify-content: flex-start;
    }
  }

  & button {
    margin-top: 0;
    display: inline-flex;
    align-self: flex-end;
  }
`;

const successText = 'Thanks for the suggestion!';
const errorText = 'Oops... something went wrong!';
type ResultMessage = {
  text?: string;
  show?: boolean;
  error?: boolean;
};

export const BlogIdeas: Component = () => {
  const formSlug =
    process?.env?.FORMIUM_BLOG_FORM_SLUG ||
    process?.env?.NEXT_PUBLIC_FORMIUM_BLOG_FORM_SLUG ||
    'blog-suggestions';

  const [suggestion, setSuggestion] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<ResultMessage>();

  const finishSubmission = (success: boolean) => {
    setSubmitting(false);
    setSuggestion('');
    setResultMessage({
      text: `${success ? successText : errorText} ${success ? '😀' : '😨'}`,
      show: true,
      error: !success,
    });
  };

  const submitSuggestion = async () => {
    setResultMessage({});
    setSubmitting(true);
    await formium
      .submitForm(formSlug, { suggestion })
      .then((data?: unknown) => {
        // @ts-ignore
        finishSubmission(data && data?.ok);
      })
      .catch(() => {
        finishSubmission(false);
      });
  };

  useEffect(() => {
    if (!resultMessage?.show) return;
    setTimeout(() => {
      setResultMessage({ text: resultMessage?.text });
      setTimeout(() => {
        setResultMessage({ text: '' });
      }, 400);
    }, 3500);
  }, [resultMessage]);

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

      <BlogIdeasForm>
        <BlogIdeasField
          tag={'textarea'}
          label={'Ideas'}
          disabled={submitting}
          iconPath={mdiLightbulbOnOutline}
          placeholder={'What should I blog about next?'}
          name={'suggestion'}
          value={suggestion}
          onChange={setSuggestion}
          required
          hideLabel
        />
        <BlogIdeasSubmitWrapper>
          <p
            className={
              [
                resultMessage?.error ? 'error' : 'success',
                resultMessage?.show ? 'visible' : '',
              ]
                .join(' ')
                .trim() || undefined
            }
          >
            {resultMessage?.text}
          </p>

          <Button
            name={'Submit blog post ideas'}
            icon={mdiMessageArrowRightOutline}
            onClick={(e: any) => {
              e.preventDefault();
              submitSuggestion().catch();
            }}
            disabled={suggestion.length <= 5 || submitting}
          >
            Submit
          </Button>
        </BlogIdeasSubmitWrapper>
      </BlogIdeasForm>
    </BlogIdeasContainer>
  );
};
