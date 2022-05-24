/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const todos = /* GraphQL */ `
  query Todos {
    todos {
      id
      name
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
    }
  }
`;
