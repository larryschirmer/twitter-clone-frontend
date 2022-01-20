import styled from 'styled-components';

import { colors } from '../../styles/vars';

type Args = {
  isSecondary?: boolean;
};

export const Button = styled.button<Args>`
  width: fit-content;
  background-color: ${colors.primaryDefault};
  border: 0.1rem solid ${colors.primaryDefault};
  border-radius: 0.4rem;
  padding: 0.8rem 2rem;
  font-weight: 600;
  color: ${colors.grey1};
  cursor: pointer;
  &:hover {
    background-color: ${colors.grey8};
    border-color: ${colors.grey8};
  }
  &:disabled {
    background-color: ${colors.grey6};
    border-color: ${colors.grey5};
    color: ${colors.grey7};
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${(props) =>
    props.isSecondary
      ? `
   border: 0.1rem solid ${colors.grey5};
   background-color: ${colors.primaryLightBg};
   color: ${colors.grey8};
   &:hover {
     background-color: ${colors.grey4};
     border-color: ${colors.grey6};
   }
  `
      : ''}
`;
