import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {mockResolvers} from "./fixtures/mockResolvers";

const typeDefs = `#graphql
  type AccordionItem {
    _id: ID!
    name: String
    text: String
  }
  type AccordionItemCollection {
    items: [AccordionItem]
  }
  type Accordion {
    _id: ID!
    title: String
    accordionItemsCollection: AccordionItemCollection
  }
  type AccordionCollection {
    items: [Accordion]
  }

  type Query {
    accordionCollection: AccordionCollection
  }
`;


const server = new ApolloServer({
    typeDefs,
    resolvers: mockResolvers,
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
});

console.log(`🚀  Server ready at: ${url}`);