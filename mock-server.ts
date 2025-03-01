import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

const typeDefs = `#graphql
  type AccordionItem {
    name: String
    text: String
  }
  type AccordionItemCollection {
    items: [AccordionItem]
  }
  type Accordion {
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
        name: 'Hvilke selskaper har Uy jobbet for?',
        text: 'EVRY, Dfind Consulting, Apriil og Webstep'
    },
    {
        name: 'Hvor gammel er Uy?',
        text: 'Han er 32 år gammel'
    }
];

const accordions = [
    {
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