import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const link = createHttpLink({
    uri: `${import.meta.env.VITE_BACKEND_URL}/spaces/${import.meta.env.VITE_SPACE}/environments/${import.meta.env.VITE_ENVIRONMENT}`
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache()
});