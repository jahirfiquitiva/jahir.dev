import styled from '@emotion/styled';

export const ButtonGroup = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  & > * {
    margin-bottom: 0.8rem;
    &:not(:last-child) {
      margin-right: 0.8rem;
    }
  }
`;
