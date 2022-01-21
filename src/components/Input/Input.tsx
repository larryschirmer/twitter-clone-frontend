import { InputHTMLAttributes } from 'react';

import * as styles from './Input.styles';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = ({
  id,
  label,
  type = 'text',
  name,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
  onFocus,
}: Props) => {
  return (
    <styles.Wrapper>
      <label htmlFor={id}>{label}</label>
      <input {...{ id, type, name, value, placeholder, onChange, onBlur, onFocus }} size={1} />
      <div className="error">{error && <p role="alert">{error}</p>}</div>
    </styles.Wrapper>
  );
};

export default Input;
