/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import styled from '@emotion/styled';
import {
  mdiAccountOutline,
  mdiEmailOutline,
  mdiMessageArrowRightOutline,
  mdiMessageTextOutline,
} from '@mdi/js';
import { useState, useEffect } from 'react';

import { Field } from '~/elements/simple/field';
import { formium } from '~/lib/formium';
import { Button, Link } from '~/new-components/atoms/simple';
import { Component, ComponentProps, mediaQueries } from '~/types';

const InternalForm = styled.form`
  margin-bottom: var(--content-bottom-margin);
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${mediaQueries.tablet.sm} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.2rem;
  }
`;

const FormDisclaimer = styled.p`
  margin-top: 0.8rem;
  color: var(--text-tertiary);
  font-size: calc(var(--base-font-size) * 0.8);
`;

interface FormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactFormProps extends ComponentProps {
  reCaptchaKey?: string;
}

export const ContactForm: Component<ContactFormProps> = (props) => {
  const { reCaptchaKey } = props;
  const formSlug =
    process?.env?.FORMIUM_FORM_SLUG ||
    process?.env?.NEXT_PUBLIC_FORMIUM_FORM_SLUG ||
    'blog-suggestions';

  const reCaptchaAction = formSlug.replace(/[^a-zA-Z]/g, '_');
  const [token, setToken] = useState('');

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormData>({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const getFormErrors = (ignoreEmptyFields?: boolean): FormData => {
    const errors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};
    if (!ignoreEmptyFields) {
      if (name.length <= 0) {
        errors.name = 'Your name must not be empty';
      }
    }
    if (message.length <= 0) {
      if (!ignoreEmptyFields) errors.message = 'Message must not be empty';
    } else if (message.length <= 25) {
      errors.message = 'Message should be at least 25 characters long';
    }
    if (email.length <= 0) {
      if (!ignoreEmptyFields) errors.email = 'Your email must not be empty';
    } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errors.email = 'Your email seems to not be valid';
    }
    return errors;
  };

  const onFormFocus = () => {
    setErrors({});
  };

  const onFormBlur = () => {
    setErrors(getFormErrors(true)); // Ignore empty fields
  };

  const finishSubmission = (success: boolean) => {
    setErrors({});
    window.location.href = success ? '/sent' : '/error';
  };

  useEffect(() => {
    if (!window) return;
    const handleLoaded = () => {
      // @ts-ignore
      window?.grecaptcha?.ready(() => {
        try {
          // @ts-ignore
          window?.grecaptcha
            ?.execute(reCaptchaKey, { action: reCaptchaAction })
            ?.then(setToken);
        } catch (e) {}
      });
    };
    // Add reCaptcha
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}`;
    script.addEventListener('load', handleLoaded);
    document.body.appendChild(script);
  }, [reCaptchaKey, reCaptchaAction]);

  const customFormSubmit = async (e: any) => {
    e?.preventDefault();

    try {
      // @ts-ignore
      window?.grecaptcha
        ?.execute(reCaptchaKey, { action: reCaptchaAction })
        ?.then(setToken);
    } catch (e) {}

    // Validate reCaptcha and honeypot
    if (!token || honeypot.length) {
      finishSubmission(false);
      return;
    }
    const validCaptchaResponse = await fetch(
      `/api/captcha?action=${reCaptchaAction}&token=${token}`,
    );
    const validCaptcha = await validCaptchaResponse.json();
    if (!validCaptcha || !validCaptcha.valid) {
      finishSubmission(false);
      return;
    }

    // Validate form fields
    const errors = getFormErrors();
    setErrors(errors);
    if (Object.keys(errors).length) {
      return;
    }

    // Start form submission to formium
    setSubmitting(true);
    await formium
      .submitForm(formSlug, { name, email, message })
      .then((data?: any) => {
        finishSubmission(data && data.ok);
      })
      .catch(() => {
        finishSubmission(false);
      });
  };

  return (
    <InternalForm onFocus={onFormFocus} onBlur={onFormBlur}>
      <FormRow>
        <Field
          tag={'input'}
          name={'name'}
          label={'Name'}
          value={name}
          onChange={setName}
          placeholder={'Jon Doe'}
          iconPath={mdiAccountOutline}
          disabled={submitting}
          error={errors?.name}
          required
        />
        <Field
          tag={'input'}
          name={'email'}
          label={'Email'}
          value={email}
          onChange={setEmail}
          placeholder={'jon.doe@email.com'}
          iconPath={mdiEmailOutline}
          disabled={submitting}
          error={errors?.email}
          required
        />
      </FormRow>
      <Field
        tag={'textarea'}
        name={'message'}
        label={'Message'}
        value={message}
        onChange={setMessage}
        placeholder={'Hi Jahir...'}
        iconPath={mdiMessageTextOutline}
        disabled={submitting}
        error={errors?.message}
        required
      />
      <input
        type={'text'}
        name={'honeypot'}
        hidden
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value.toString())}
      />
      <FormDisclaimer className={'small'}>
        This site is protected by reCAPTCHA and the Google{' '}
        <Link
          title={'Google Privacy Policy link'}
          href={'https://policies.google.com/privacy'}
        >
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link
          title={'Google Terms of Service link'}
          href={'https://policies.google.com/terms'}
        >
          Terms of Service
        </Link>{' '}
        apply.
      </FormDisclaimer>
      <Button
        title={'Button to send contact form email'}
        disabled={submitting}
        onClick={customFormSubmit}
        icon={mdiMessageArrowRightOutline}
      >
        Send
      </Button>
      <div
        className={'g-recaptcha'}
        data-action={reCaptchaAction}
        data-sitekey={props.reCaptchaKey}
        data-size={'invisible'}
      />
    </InternalForm>
  );
};
