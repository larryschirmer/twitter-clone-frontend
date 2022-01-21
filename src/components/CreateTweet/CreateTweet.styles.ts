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
      'tweet'
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
    .grid-tweet {
      grid-area: tweet;
    }
    .grid-cta {
      grid-area: cta;
    }
  }
`;
