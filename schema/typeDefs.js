const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
    stock: Int
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(name: String!, price: Float!, description: String, stock: Int): Product
    updateProduct(id: ID!, name: String, price: Float, description: String, stock: Int): Product
    deleteProduct(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
