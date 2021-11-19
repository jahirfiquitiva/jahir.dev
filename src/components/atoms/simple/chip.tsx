import styled from '@emotion/styled';

export const Chip = styled.span`
  --bg-color: var(--divider);
  --border-color: var(--divider);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.7rem 0.4rem 0.6rem;
  font-size: var(--font-tiny);
  border-radius: 99999px;
  border: 1px solid var(--border-color);
  background: rgba(0, 0, 0, 0);
  color: var(--text-secondary);
  transition: all 0.25s ease-in-out;
  line-height: 1.65;

  & > *:first-of-type {
    margin-right: 0.4rem;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: var(--text-primary);
    background-color: var(--bg-color);
  }
`;

export const ImageChip = styled(Chip)`
  line-height: inherit;
  padding: 0.4rem 0.8rem 0.4rem 0.4rem;

  & > *:first-of-type {
    margin-right: 0.4rem !important;
  }

  & img {
    border-radius: 50%;
  }
`;
