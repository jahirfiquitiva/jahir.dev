import styled from '@emotion/styled';

import { ExtLinkCard } from '~/elements/card';

export const BaseProjectCard = styled(ExtLinkCard)`
  --border-radius: 8px;
  border: 1px dashed var(--dashed-color);
  width: 100%;
  max-height: 192px;
  max-width: 480px;
  overflow: hidden;
  background-color: var(--bg-color);
  color: var(--text-secondary);
  display: grid;
  grid-template-columns: 65% 1fr;

  @media screen and (min-width: 375px) {
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

      h6 {
        flex: 1;
        color: var(--text-primary);
        text-shadow: 1px 2px 2px var(--projects-card-text-shadow);
        margin-left: 0.9rem;
        font-size: calc(var(--base-font-size) * 1.5);

        @media screen and (min-width: 375px) {
          font-size: calc(var(--base-font-size) * 1.75);
        }
      }
    }

    p {
      font-size: 0.95rem;
      text-decoration: none;
    }

    .stack {
      flex-wrap: wrap;
      margin-top: 0.6rem;
      opacity: 0.85;

      li {
        display: inline-flex;
        align-items: center;
        overflow: hidden;
        height: 24px;
        width: 24px;
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
    background-repeat: no-repeat;
    background-position: 30% 220%;
    background-size: 180%;

    @media screen and (min-width: 375px) {
      background-position: 30% 250%;
      background-size: 145%;
    }

    @media screen and (min-width: 425px) {
      background-position: 30% -350%;
      background-size: 145%;
    }

    @media screen and (min-width: 480px) {
      background-position: 30% -50%;
      background-size: 145%;
    }
  }

  &:hover,
  &:focus {
    border: 1px solid var(--border-color);
    color: var(--text-primary);

    .icon-title {
      img {
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
    }

    .stack {
      opacity: 1;
    }

    .preview {
      filter: blur(0);
      opacity: 1;
      background-position: 30% 30px;
      background-size: 200%;

      @media screen and (min-width: 375px) {
        background-position: 40% 40px;
        background-size: 160%;
      }

      @media screen and (min-width: 425px) {
        background-position: 40% -20%;
        background-size: 160%;
      }
    }
  }
`;
