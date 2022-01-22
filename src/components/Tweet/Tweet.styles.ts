import styled from 'styled-components';
import { colors } from 'styles/vars';

export const Wrapper = styled.div`
  border: 1px solid ${colors.grey5};
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    .profile {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    &-with-cta {
      display: flex;
      justify-content: space-between;
    }
  }
  .body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 5rem;
    .retweet {
      border: 1px solid ${colors.grey5};
      border-radius: 0.5rem;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .comments {
      .comment {
        padding: 1rem 0;
      }
    }
  }
`;
