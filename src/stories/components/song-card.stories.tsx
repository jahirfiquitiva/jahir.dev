import { Meta, Story } from '@storybook/react';

import { SongCard } from '~/components/cards';

export const Default: Story = () => {
  return (
    <SongCard
      url={'https://open.spotify.com/track/3uwYgNxFDfx1GoLB6tLoUn'}
      title={'Good Day'}
      artist={'Twenty One Pilots'}
      album={'Scaled And Icy'}
      image={{
        url: 'https://jahir.dev/_next/image?url=https://i.scdn.co/image/ab67616d0000485120b467550945fd123e00f0a5&w=256&q=75',
      }}
    />
  );
};

export default {
  title: 'Components/Song card',
} as Meta;
