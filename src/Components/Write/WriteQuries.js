import { gql } from 'apollo-boost';
import { POST_FRAGMENT } from '../../fragments';
export const FEED_QUERY = gql`
  {
    seeFeed {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;

export const UPLOAD = gql`
  mutation upload($caption: String!, $files: [String!]!, $title: String) {
    upload(caption: $caption, files: $files, title: $title) {
      id
      caption
    }
  }
`;
