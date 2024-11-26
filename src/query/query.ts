import { gql } from '@apollo/client'

export interface IRequest {
  path: string;
  payload: string[];
}

export const generateQuery = (request: IRequest) => {
  const arrayToString = request.payload.join(" ");
  return gql`query ($options: PageQueryOptions) {
    ${request.path}(options: $options) {
    data {
    ${arrayToString}
    }
    meta {
      totalCount
    }
  }
}`}
