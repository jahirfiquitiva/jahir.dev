'use client';

import { Markdown } from '@react-email/components';
import { useActionState, useState } from 'react';

import { sendEmail, type EmailState, type EmailForm } from '@/actions/email';
import { Button } from '@/components/atoms/button';
import { Icon } from '@/components/atoms/icon';
import { Link } from '@/components/atoms/link';
import { loading } from '@/components/icons';
import cx from '@/utils/cx';

const sendIconPath =
  // eslint-disable-next-line @stylistic/max-len
  'M22 5.5H9C7.9 5.5 7 6.4 7 7.5V16.5C7 17.61 7.9 18.5 9 18.5H22C23.11 18.5 24 17.61 24 16.5V7.5C24 6.4 23.11 5.5 22 5.5M22 16.5H9V9.17L15.5 12.5L22 9.17V16.5M15.5 10.81L9 7.5H22L15.5 10.81M5 16.5C5 16.67 5.03 16.83 5.05 17H1C.448 17 0 16.55 0 16S.448 15 1 15H5V16.5M3 7H5.05C5.03 7.17 5 7.33 5 7.5V9H3C2.45 9 2 8.55 2 8S2.45 7 3 7M1 12C1 11.45 1.45 11 2 11H5V13H2C1.45 13 1 12.55 1 12Z';
const sentIconPath =
  // eslint-disable-next-line @stylistic/max-len
  'M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z';

export const ContactForm = () => {
  const [sendEmailState, sendEmailAction, submitting] = useActionState<
    EmailState,
    FormData
  >(sendEmail, {
    success: false,
  });

  const [formFields, setFormFields] = useState<EmailForm>({
    name: '',
    email: '',
    message: '',
  });

  return (
    <form action={sendEmailAction} className={'flex flex-col gap-5 relative'}>
      <div className={'flex flex-col gap-1.5'}>
        <label htmlFor={'name'} className={'font-semibold font-manrope'}>
          Name
        </label>
        <input
          required
          type={'text'}
          id={'name'}
          name={'name'}
          disabled={submitting || sendEmailState.success}
          value={formFields.name}
          onChange={(e) => {
            setFormFields({ ...formFields, name: e.target.value });
          }}
          className={cx(
            'text-primary-txt',
            'px-3 py-2 bg-white dark:bg-white/5',
            'rounded-2 border border-divider',
            'focus-visible:ring-1 focusvisible:ring-accent focus-visible:border-accent',
          )}
          placeholder={'Joan Doe'}
        />
        {sendEmailState.errors?.name && !submitting && (
          <p className={'text-red-600 dark:text-red-400 text-2xs -mt-1'}>
            {sendEmailState.errors.name}
          </p>
        )}
      </div>
      <div className={'flex flex-col gap-1.5'}>
        <label htmlFor={'email'} className={'font-semibold font-manrope'}>
          Email
        </label>
        <input
          required
          type={'email'}
          id={'email'}
          name={'email'}
          disabled={submitting || sendEmailState.success}
          value={formFields.email}
          onChange={(e) => {
            setFormFields({ ...formFields, email: e.target.value });
          }}
          className={cx(
            'text-primary-txt',
            'px-3 py-2 bg-white dark:bg-white/5',
            'rounded-2 border border-divider',
            'focus-visible:ring-1 focusvisible:ring-accent focus-visible:border-accent',
          )}
          placeholder={'joan.doe@example.com'}
        />
        {sendEmailState.errors?.email && !submitting && (
          <p className={'text-red-600 dark:text-red-400 text-2xs -mt-1'}>
            {sendEmailState.errors.email}
          </p>
        )}
      </div>
      <div className={'grid grid-cols-1 tablet-sm:grid-cols-2 gap-4'}>
        <div className={'flex flex-col gap-1.5'}>
          <label htmlFor={'message'} className={'font-semibold font-manrope'}>
            Message
          </label>
          <textarea
            required
            name={'message'}
            id={'message'}
            rows={5}
            disabled={submitting || sendEmailState.success}
            value={formFields.message}
            onChange={(e) => {
              setFormFields({ ...formFields, message: e.target.value });
            }}
            placeholder={'Hello, Jahir!'}
            className={cx(
              'text-primary-txt text-2xs',
              'px-3 py-2 bg-white dark:bg-white/5',
              'rounded-2 border border-divider',
              'focus-visible:ring-1 focusvisible:ring-accent focus-visible:border-accent',
              'resize-y font-mono',
            )}
          />
          <p className={'text-tertiary-txt text-3xs -mt-1'}>
            You can use{' '}
            <Link
              title={'Markdown Cheat Sheet'}
              href={'https://www.markdownguide.org/cheat-sheet/'}
            >
              simple markdown
            </Link>{' '}
            in here.
          </p>
        </div>
        <div className={'flex flex-col gap-1.5'}>
          <label className={'font-semibold font-manrope'}>Preview</label>
          <Markdown
            markdownContainerStyles={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              height: '100%',
              border: '0.0625rem dashed var(--color-divider)',
              marginBottom: '1.75rem',
              borderRadius: '0.5rem',
              padding: '0.5rem 0.75rem',
            }}
            markdownCustomStyles={{
              h1: {},
              h2: {},
              h3: {},
              h4: {},
              h5: {},
              h6: {},
              image: { maxHeight: 56 },
            }}
          >
            {formFields.message}
          </Markdown>
        </div>
        {sendEmailState.errors?.message && !submitting && (
          <p className={'text-red-600 dark:text-red-400 text-2xs -mt-1'}>
            {sendEmailState.errors.message}
          </p>
        )}
      </div>
      <div
        className={cx(
          'flex flex-col gap-1 flex-wrap w-full',
          'tablet-sm:flex-row tablet-sm:justify-end tablet-sm:items-center',
        )}
      >
        {!submitting ? (
          sendEmailState.errors?.submission ? (
            <p
              className={
                'font-semibold text-red-600 dark:text-red-400 text-2xs flex-1'
              }
            >
              {sendEmailState.errors.submission}
            </p>
          ) : sendEmailState.success ? (
            <p
              className={cx(
                'flex flex-row items-center gap-1.5 font-semibold min-h-11',
                'text-green-600 dark:text-green-400 text-2xs flex-1',
              )}
            >
              <Icon
                path={sentIconPath}
                className={'fill-green-600 dark:fill-green-400'}
              />
              <span>Thanks for your message!</span>
            </p>
          ) : null
        ) : null}
        <Button
          title={submitting ? 'Sending email…' : 'Send email'}
          type={'submit'}
          disabled={submitting || sendEmailState.success}
          className={cx(
            'self-end transition-opacity',
            sendEmailState.success
              ? 'hidden invisible pointer-events-none select-none'
              : '',
          )}
          aria-hidden={sendEmailState.success}
        >
          <Icon
            path={submitting ? loading : sendIconPath}
            className={submitting ? 'animate-spin' : ''}
          />
          <span>{submitting ? 'Sending…' : 'Send'}</span>
        </Button>
      </div>
    </form>
  );
};
