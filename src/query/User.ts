import { gql } from '@apollo/client'

export interface IRequest {
  path: string;
  payload: string;
}

export const generateQuery = (request: IRequest) => {
  return gql`query ($options: PageQueryOptions) {
    ${request.path}(options: $options) {
    data {
    ${request.payload}
    }
    meta {
      totalCount
    }
  }
}`}
