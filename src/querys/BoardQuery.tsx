import { gql } from "@apollo/client";

export const listQuery = gql`
query($offset: Float!, $limit: Float!){
  list(offset: $offset, limit: $limit){
    user_id
    title
    content
    board_id
  }
}
`;

export const writeQuery = gql`
mutation($content:String!, $title: String!, $user_id: String!){
  write(content:$content, title:$title, user_id:$user_id)
}
`;

export const readQuery = gql`
query($id:Float!){
  read(id:$id){
    board_id
    user_id
    title
    content
  }
}
`