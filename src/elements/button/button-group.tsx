import styled from '@emotion/styled';

export const ButtonGroup = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: .8rem;
  }
`