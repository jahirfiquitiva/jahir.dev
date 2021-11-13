import { Content, DefaultContent } from './default';

import { Component } from '~/types';

const content: Content = {
  type: 'four-hundred-four',
  title: 'Woops! ~ Page not found',
  message:
    'Unfortunately the site you were trying to reach does not exist or has been moved. 😥',
  gif: '/static/gifs/404.gif',
  alt: 'John Travolta GIF',
};

export const FourHundredFour: Component = () => <DefaultContent {...content} />;
