import { gql } from 'apollo-boost';
import { POST_FRAGMENT } from '../../fragments';
export const TOGGLE_LIKE = gql`
  mutation toggelLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: String!, $text: String!) {
    addComment(postId: $postId, text: $text) {
      id
      text
      user {
        userName
      }
    }
  }
`;

export const POST_SUBSCRIPTION = gql`
  subscription onPostAdded {
    postAdded {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;
