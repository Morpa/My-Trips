import { GraphQLClient } from 'graphql-request'

const endPoint = process.env.GRAPHQL_HOST || ''

const client = new GraphQLClient(endPoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
