import { gql } from '@apollo/client'

export const generateUserQuery = (data: string) => {
  return gql`query ($options: PageQueryOptions) {
  users(options: $options) {
    data {
    ${data}
    }
    meta {
      totalCount
    }
  }
}`}
