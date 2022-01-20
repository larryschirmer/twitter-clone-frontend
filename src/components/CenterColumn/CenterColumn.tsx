import { ReactNode } from 'react';
import * as styles from './CenterColumn.styles';

type Props = {
  children?: ReactNode;
};

const CenterColumn = ({ children }: Props) => {
  return <styles.Wrapper>{children}</styles.Wrapper>;
};

export default CenterColumn;
