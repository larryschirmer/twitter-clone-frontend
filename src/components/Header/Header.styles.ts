import styled from 'styled-components';

import { colors } from '../../styles/vars';

export const Wrapper = styled.div`
  border: 1px solid ${colors.grey5};
  padding: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  .login-status {
    display: flex;
    gap: 1rem;
  }
`;
