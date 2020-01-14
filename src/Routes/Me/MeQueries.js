import { gql } from 'apollo-boost';

export const READ_MYDIARY = gql`
  query readMyDiary {
    readMyDiary {
      id
      content
      good
      score
      question {
        type
      }
    }
  }
`;
