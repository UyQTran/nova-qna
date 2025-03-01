import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

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

const accordionItems = [
    {
        _id: '123',
        name: 'Hvilke selskaper har Uy jobbet for?',
        text: 'EVRY, Dfind Consulting, Apriil og Webstep'
    },
    {
        _id: '234',
        name: 'Hvor gammel er Uy?',
        text: 'Han er 32 år gammel'
    }
];

const accordions = [
    {
        _id: '123',
        title: 'Uy sine FAQs',
        accordionItemsCollection: {items: accordionItems}
    }
];

const resolvers = {
    Query: {
        accordionCollection: () => ({items: accordions}),
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
});

console.log(`🚀  Server ready at: ${url}`);