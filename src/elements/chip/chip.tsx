import styled from '@emotion/styled';

export const Chip = styled.span`
  --bg-color: var(--divider);
  --border-color: var(--divider);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
  border-radius: 999999px;
  background-color: transparent;
  color: var(--text-secondary);
  cursor: default;
  transition: all 0.2s ease-in-out;
  margin: 0.4rem 0.6rem 0.4rem 0;

  &:hover,
  &:focus {
    background-color: var(--bg-color);
    color: var(--text-primary);
    text-decoration: none;
  }

  & svg {
    margin-right: 0.4rem;
  }
`;

export const ChipGroup = styled.ul`
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
