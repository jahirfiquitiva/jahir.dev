import { Meta, Story } from '@storybook/react';

import { SongCard } from '~/components/cards';

export const Default: Story = () => {
  return (
    <SongCard
      url={'https://open.spotify.com/track/3A0ITFj6kbb9CggwtPe55f'}
      title={'Venom'}
      artist={'Little Simz'}
      album={'GREY Area'}
      image={{
        url: 'https://i.scdn.co/image/ab67616d000048511c54fc953531d5da04232deb',
      }}
    />
  );
};

export default {
  title: 'Components/Song card',
} as Meta;
