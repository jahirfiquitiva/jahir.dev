'use server';

import { render } from '@react-email/render';
import { Resend } from 'resend';
import {
  object,
  string,
  email,
  pipe,
  trim,
  minLength,
  safeParse,
  type InferInput,
  optional,
  maxLength,
} from 'valibot';

import { EmailBody } from '@/components/molecules/email';

const EmailSchema = object({
  name: pipe(
    string(),
    trim(),
    minLength(1, 'This field is required'),
    maxLength(254, 'Your name seems to be a bit too long'),
  ),
  email: pipe(
    string(),
    trim(),
    minLength(1, 'This field is required'),
    maxLength(254, 'Your email seems to be a bit too long'),
    email('Email is not valid'),
  ),
  message: pipe(
    string(),
    trim(),
    minLength(16, 'Message must be at least 16 characters long'),
    maxLength(500, 'Message must be at most 500 characters long'),
  ),
  color: optional(string()),
});

export type EmailForm = InferInput<typeof EmailSchema>;

export interface EmailState {
  success: boolean;
  errors?: {
    [key in keyof EmailForm | 'submission']?: string | null | undefined;
  };
}

const resend = new Resend(process.env.RESEND_API_KEY || '');

export const sendEmail = async (
  prevState: EmailState,
  formData: FormData,
): Promise<EmailState> => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const color = formData.get('color') as string;
  try {
    if (Boolean(color))
      return { success: false, errors: { color: 'Keep trying' } };

    const validation = safeParse(EmailSchema, { name, email, message });
    if (!validation.success) {
      const errors: EmailState['errors'] = {};
      validation.issues.forEach((issue) => {
        const key = issue.path?.[0]?.key as keyof EmailForm;
        errors[key] = issue.message;
      });
      return { success: false, errors };
    }

    const htmlBody = await render(EmailBody({ name, email, message }));
    const { data, error } = await resend.emails.send({
      from: `${name} <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.RESEND_TARGET_EMAIL || '',
      subject: "📬 You've got a message",
      replyTo: email,
      html: htmlBody,
    });
    return {
      errors: {
        submission: error?.message,
      },
      success: Boolean(data?.id),
    };
  } catch (error) {
    return {
      errors: {
        submission: (error as Error).message || 'Something went wrong',
      },
      success: false,
    };
  }
};
