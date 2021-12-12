import styled from '@emotion/styled';

import { Image } from '~/components/atoms/simple';
import { Component, mediaQueries } from '~/types';

const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  grid-row: 1;
  filter: drop-shadow(0 4px 3px rgba(var(--shadow-color), 0.12));

  ${mediaQueries.tablet.sm} {
    justify-content: flex-end;
    margin-bottom: 0;
  }
`;

const PhotoImage = styled(Image)`
  border-radius: 50%;
  padding: 0.4rem !important;
  filter: drop-shadow(0 1px 2px rgba(var(--shadow-color), 0.04));
`;

export const Photo: Component = (props) => {
  const { className, style } = props;
  return (
    <PhotoContainer className={className} style={style}>
      <PhotoImage
        src={'/static/images/jahir/jahir-hd.jpg'}
        alt={"Jahir's Photo"}
        size={168}
        priority
      />
    </PhotoContainer>
  );
};
