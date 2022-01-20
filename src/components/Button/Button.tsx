import { ReactNode, ButtonHTMLAttributes } from 'react';

import * as styles from './Button.styles';

export type Props = {
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  'aria-label'?: string;
  disabled?: boolean;
  isSecondary?: boolean;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const {
    children,
    type = 'button',
    'aria-label': ariaLabel = 'button',
    disabled = false,
    isSecondary = false,
    onClick,
  } = props;

  return (
    <styles.Button {...{ type, disabled, onClick, isSecondary }} aria-label={ariaLabel}>
      {children}
    </styles.Button>
  );
};

export default Button;
