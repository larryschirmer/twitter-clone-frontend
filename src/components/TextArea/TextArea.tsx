import { InputHTMLAttributes } from 'react';

import * as styles from './TextArea.styles';

export type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

const TextArea = ({
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
      <textarea {...{ id, type, name, value, placeholder, onChange, onBlur, onFocus }} />
      <div className="error">{error && <p role="alert">{error}</p>}</div>
    </styles.Wrapper>
  );
};

export default TextArea;
