import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ApolloClient, InMemoryCache, gql, createHttpLink} from '@apollo/client';
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

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache()
});

function App() {
    const [count, setCount] = useState(0)
    client.query({query: gql`
    query {
  accordionItemCollection {
    items{
      name
      text
    }
  }
}`})

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
