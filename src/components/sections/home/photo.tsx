import styled from '@emotion/styled';

import { Image } from '~/components/atoms/simple';
import { Component, mediaQueries } from '~/types';

const PhotoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  grid-row: 1;
  background-color: var(--background);

  ${mediaQueries.tablet.sm} {
    justify-content: flex-end;
    margin-bottom: 0;
  }

  & > span::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--accent-dark);
    mix-blend-mode: lighten;
  }

  & > span:hover::after,
  & > span:hover,
  & > span:hover img {
    filter: none;
    -webkit-filter: none;
    mix-blend-mode: unset !important;
    background: none;
  }
`;

const PhotoImage = styled(Image)`
  border-radius: 50%;
  padding: 0.4rem !important;
  transition: all 0.25s ease-in-out;
  mix-blend-mode: multiply;
  filter: opacity(0.9) brightness(1.3) grayscale(100%);
`;

export const Photo: Component = (props) => {
  const { className, style } = props;
  return (
    <PhotoContainer className={className} style={style}>
      <PhotoImage
        src={'/static/images/jahir/jahir-hd.jpg'}
        alt={"Jahir's Photo"}
        size={180}
        priority
      />
    </PhotoContainer>
  );
};
