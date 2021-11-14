import { Content, DefaultContent } from './default';

import { Component } from '~/types';

const content: Content = {
  type: 'under-construction',
  title: 'Site under (re)construction!',
  message:
    'Please bear with me as I work really hard to bring this site (back) to life 😬',
  shadowColor: 'yellow',
  gradientColors: 'yellow-to-orange',
  gif: '/static/gifs/construction.gif',
  alt: 'Person building a house',
};

export const UnderConstruction: Component = () => (
  <DefaultContent {...content} />
);
