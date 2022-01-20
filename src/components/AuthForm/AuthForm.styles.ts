import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  form {
    display: grid;
    column-gap: 2rem;
    row-gap: 1rem;
    grid-template-areas:
      'name'
      'password'
      'ctas';
    .form-row {
      margin-bottom: 2rem;
      display: flex;
      align-items: flex-end;
      p {
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
    }
    .grid-name {
      grid-area: name;
    }
    .grid-password {
      grid-area: password;
    }
    .grid-ctas {
      grid-area: ctas;
      .ctas {
        display: flex;
        > * {
          margin-right: 2rem;
        }
      }
    }
  }
`;
