import styled from '@emotion/styled';

import { Component, ComponentProps } from '~/types';

const BaseDetails = styled.details`
  margin-bottom: 1.2rem;
  & summary {
    cursor: pointer;
  }

  & div:first-of-type {
    opacity: 0;
    height: 0;
    transition: all 0.25s ease-in-out;
  }

  &[open] div:first-of-type {
    height: unset;
    opacity: 1;
  }
`;

interface DetailsProps extends ComponentProps {
  summary?: string;
}

export const Details: Component<DetailsProps> = (props) => {
  const { summary } = props;
  return (
    <BaseDetails>
      <summary>{summary}</summary>
      {props.children}
    </BaseDetails>
  );
};
