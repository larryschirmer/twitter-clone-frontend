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
    align-items: center;
    gap: 1rem;
    .profile-img {
      width: 4rem;
      height: 4rem;
      background-color: #2F83ED;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      font-weight: bold;
      color: white;
    }
  }
`;
