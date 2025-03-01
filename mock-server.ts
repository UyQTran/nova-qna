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

  type Query {
    accordionItemCollection: AccordionItemCollection
  }
`;

const items = [
    {
        name: 'Hvilke andre selskaper finnes i Nova?',
        text: 'I tillegg til Novacare består Nova Consulting Group av Epinova, Egde, Novanet, Dekode, Northern Beat, Point Taken, Rocket, Pineberry, Infunnel, Cloud Nine, Singular Studios og Novalab!'
    },
    {
        name: 'Hvor ligger Novacare sitt kontor?',
        text: 'Nova House ligger midt på Karl Johans gate! Nærmere bestemt Karl Johans gate 16.'
    }
];

const resolvers = {
    Query: {
        accordionItemCollection: () => ({ items }),
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
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);