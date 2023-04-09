import cx from 'classix';

import { tw, type ComponentProps } from '@/tw';

const buttonClasses = tw`
  inline-flex
  items-center
  justify-center
  self-start
  border-none
  px-3
  bg-blue-500
  font-manrope
` as string;

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      aria-label={props.title}
      name={props.title}
      type={props.type || 'button'}
      className={cx(buttonClasses, props.className as string)}
    />
  );
};
