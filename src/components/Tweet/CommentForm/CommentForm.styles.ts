import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  form {
    display: grid;
    column-gap: 2rem;
    row-gap: 1rem;
    grid-template-areas:
      'comment'
      'cta';
    .form-row {
      margin-bottom: 2rem;
      display: flex;
      align-items: flex-end;
      p {
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
    }
    .grid-comment {
      grid-area: comment;
    }
    .grid-cta {
      grid-area: cta;
    }
  }
`;
