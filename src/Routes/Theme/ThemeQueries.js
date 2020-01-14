import { gql } from 'apollo-boost';

export const CREATE_MYCOLOR = gql`
  mutation ceateMyColor($avatar: String!) {
    createMyColor(avatar: $avatar)
  }
`;
