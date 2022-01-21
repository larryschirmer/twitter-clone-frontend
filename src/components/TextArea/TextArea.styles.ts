import styled from 'styled-components';

import { colors } from 'styles/vars';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 1rem;
    color: ${colors.grey9};
  }
  textarea {
    resize: vertical;
    min-height: 16rem;
    border: 0.1rem solid ${colors.grey5};
    border-radius: 0.4rem;
    padding: 0.6rem 1.2rem;
    color: ${colors.grey9};
    &::placeholder {
      color: ${colors.grey6};
    }
  }
  .error {
    position: absolute;
    bottom: -3rem;
    font-size: 1.6rem;
    color: ${colors.grey8};
  }
`;
