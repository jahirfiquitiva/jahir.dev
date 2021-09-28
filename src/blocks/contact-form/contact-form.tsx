import styled from '@emotion/styled';
import {
  mdiAccountOutline,
  mdiEmailOutline,
  mdiMessageArrowRightOutline,
  mdiMessageTextOutline,
  mdiTextBoxOutline,
} from '@mdi/js';

import { ExtLink } from '~/elements/base/ext-link';
import { Component } from '~/elements/base/fc';
import { Button } from '~/elements/simple/button';
import { Field } from '~/elements/simple/field';
import { mediaQueries } from '~/types';

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.2rem;
  }
`;

const TextAreaField = styled(Field)`
  & textarea {
    min-height: 96px;

    ${mediaQueries.tablet.sm} {
      min-height: 144px;
    }
  }
`;

const FormDisclaimer = styled.p`
  margin-top: 0.8rem;
  color: var(--text-tertiary);
  font-size: calc(var(--base-font-size) * 0.8);
`;

export const ContactForm: Component = () => {
  return (
    <form>
      <FormRow>
        <Field
          tag={'input'}
          name={'name'}
          label={'Name'}
          placeholder={'Jon Doe'}
          iconPath={mdiAccountOutline}
          required
        />
        <Field
          tag={'input'}
          name={'email'}
          label={'Email'}
          placeholder={'jon.doe@email.com'}
          iconPath={mdiEmailOutline}
          required
        />
      </FormRow>
      <Field
        tag={'input'}
        type={'email'}
        name={'subject'}
        label={'Subject'}
        placeholder={"Let's work together!"}
        iconPath={mdiTextBoxOutline}
        required
      />
      <TextAreaField
        tag={'textarea'}
        name={'message'}
        label={'Message'}
        placeholder={'Hi Jahir...'}
        iconPath={mdiMessageTextOutline}
        required
      />
      <FormDisclaimer className={'small'}>
        This site is protected by reCAPTCHA and the Google{' '}
        <ExtLink to={'https://policies.google.com/privacy'}>
          Privacy Policy
        </ExtLink>{' '}
        and{' '}
        <ExtLink to={'https://policies.google.com/terms'}>
          Terms of Service
        </ExtLink>{' '}
        apply.
      </FormDisclaimer>
      <Button icon={mdiMessageArrowRightOutline}>Send</Button>
    </form>
  );
};
