import type { TWComponentProps } from '@/utils/cx';

import { Button, OutlinedButton } from './button';
import { Link } from './link';

export const LinkButton = (props: TWComponentProps<typeof Link>) => {
  return (
    <Button title={props.title} asChild>
      <Link {...props} />
    </Button>
  );
};

export const OutlinedLinkButton = (props: TWComponentProps<typeof Link>) => {
  return (
    <OutlinedButton title={props.title} asChild>
      <Link {...props} />
    </OutlinedButton>
  );
};
