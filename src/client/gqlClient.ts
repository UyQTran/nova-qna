import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const link = createHttpLink({
    uri: `http://localhost:4000/`
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