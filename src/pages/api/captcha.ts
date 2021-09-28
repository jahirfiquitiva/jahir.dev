/* eslint-disable @typescript-eslint/no-explicit-any */
import fetch from 'isomorphic-fetch';
import { NextApiRequest, NextApiResponse } from 'next';

import { NextApiFunc } from '~/types';

const { RECAPTCHA_SECRET_KEY: recaptchaSecret = '' } = process.env;
const threshold = 0.7;
const url = `https://www.recaptcha.net/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=`;

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<NextApiFunc> => {
  const { action, token } = req.query;
  const validData = await fetch(`${url}${token}`)
    .then((response: { json: () => any }) => response.json())
    .then((data: any) => {
      return (
        data.success &&
        data.score &&
        data.action &&
        data.score >= threshold &&
        data.action === action
      );
    })
    .catch(() => {
      return false;
    });
  return res.status(200).json({
    success: true,
    valid: validData,
  });
};
