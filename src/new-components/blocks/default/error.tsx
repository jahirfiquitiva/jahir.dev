import { Content, DefaultContent } from './default';

import { Component } from '~/types';

const content: Content = {
  type: 'error',
  title: 'Woops! ~ Something went wrong',
  message: 'Unfortunately an unexpected error occurred. 😥',
  gif: '/static/gifs/monkey.gif',
  alt: 'Monkey throwing laptop aggressively',
};

export const Error: Component = () => <DefaultContent {...content} />;
