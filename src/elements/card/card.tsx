import styled from '@emotion/styled';

export const Card = styled.div`
  --border-radius: 6px;
  border-radius: var(--border-radius);
  border: 1px solid var(--divider);
  padding: 0;

  & * {
    border-radius: var(--border-radius);
  }
`;