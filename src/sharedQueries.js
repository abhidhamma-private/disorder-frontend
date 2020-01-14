import { gql } from 'apollo-boost';

export const READ_MYDATA = gql`
  query readMyData {
    readMyData {
      id
      userName
      avatar
    }
  }
`;
