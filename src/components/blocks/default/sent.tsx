import { Content, DefaultContent } from './default';

import { Component } from '~/types';

const content: Content = {
  type: 'sent',
  title: 'Thanks for your message!',
  message: 'I will get back to you as soon as possible 🙌',
  gif: '/static/gifs/mail.gif',
  alt: 'Dog checking mail',
  shadowColor: 'green',
  gradientColors: 'blue-to-green',
};

export const Sent: Component = () => <DefaultContent {...content} />;
