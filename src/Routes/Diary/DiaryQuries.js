import { gql } from 'apollo-boost';

export const GET_ALLDIARYQUESTION = gql`
  query getAllQuestion {
    getAllQuestion {
      id
      type
      description
      question
      behavior
    }
  }
`;

export const GET_QUESTIONSOFME = gql`
  query getQuestionsOfMe {
    getQuestionsOfMe {
      id
      type
      description
      question
      behavior
    }
  }
`;

export const UPDATE_MYQUESTION = gql`
  mutation updateMyQuestion($question: String!) {
    updateMyQuestion(question: $question)
  }
`;

export const CREATE_MYDIARY = gql`
  mutation createMyDiary(
    $content: String
    $good: Boolean
    $score: Int
    $questionId: String
  ) {
    createMyDiary(
      content: $content
      good: $good
      score: $score
      questionId: $questionId
    )
  }
`;
