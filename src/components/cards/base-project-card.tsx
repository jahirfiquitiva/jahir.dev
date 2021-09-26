import styled from '@emotion/styled';

import { ExtLinkCard } from '~/elements/card';

export const BaseProjectCard = styled(ExtLinkCard)`
  --border-radius: 10px;
  border: 1px solid var(--dashed-color);
  width: 100%;
  overflow: hidden;
  background-color: var(--bg-color);
  color: var(--text-secondary);
  display: grid;
  grid-template-columns: 60% 1fr;
  position: relative;

  @media screen and (min-width: 425px) {
    grid-template-columns: 70% 1fr;
  }

  @media screen and (min-width: 500px) {
    grid-template-columns: 60% 1fr;
  }

  .details {
    padding: 1.1rem 1.2rem;

    .icon-title,
    .stack {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .icon-title {
      margin-bottom: 0.4rem;
      margin-left: -0.2rem;

      & div:first-of-type,
      & img {
        overflow: unset !important;
        min-width: 48px;
      }

      img {
        opacity: 0.9;
        filter: drop-shadow(0 1px 2px var(--filter-color, var(--dashed-color)));
      }

      h6 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--text-primary);
        text-shadow: 1px 2px 2px var(--projects-card-text-shadow);
        line-height: 1.5;
        left: calc(48px + 1rem);
        position: absolute;
        margin-top: 0;
        padding-left: 0.9rem;
        font-size: calc(var(--base-font-size) * 1.25);

        @media screen and (min-width: 375px) {
          font-size: calc(var(--base-font-size) * 1.5);
        }
      }
    }

    p {
      font-size: 0.95rem;
      text-decoration: none;
      color: var(--text-secondary);
    }

    .stack {
      flex-wrap: wrap;
      margin-top: 0.6rem;
      opacity: 0.85;

      li {
        display: inline-flex;
        align-items: center;
        overflow: hidden;
        padding: 1px;
        * {
          width: 100%;
          height: 100%;
        }
        &:not(:last-of-type) {
          margin-right: 0.4rem;
        }
      }
    }
  }

  .preview {
    opacity: 0.75;
    max-height: 100%;
    max-width: 100%;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 100%;
    filter: drop-shadow(2px 3px 4px var(--filter-color, var(--dashed-color)));
  }

  &:hover,
  &:focus {
    border-color: var(--dashed-color);
    border: 1px solid var(--border-color);
    color: var(--text-primary);

    .icon-title {
      img {
        opacity: 1;
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        -ms-transform: scale(1.05);
        -o-transform: scale(1.05);
        transform: scale(1.05);
      }

      h6 {
        color: var(--hl-color);
        text-decoration: underline;
        -webkit-text-decoration-style: solid;
        -webkit-text-decoration-color: var(--hl-color);
        text-decoration: underline solid var(--hl-color);
      }

      p {
        color: var(--text-primary);
      }
    }

    .stack {
      opacity: 1;
    }

    .preview {
      opacity: 1;
      background-position: right bottom;
      background-size: 105%;
    }
  }
`;
