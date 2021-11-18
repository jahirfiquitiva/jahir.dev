import { keyframes } from '@emotion/react';
import { styled } from 'twin.macro';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

export const FadeIn = ({
  duration = 300,
  delay = 150,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  children,
  ...delegated
}) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </Wrapper>
  );
};
