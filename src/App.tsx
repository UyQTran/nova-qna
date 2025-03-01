import {client} from "./client/gqlClient.ts";
import {gqlFaqAccordion} from "./client/queries.ts";
import {Typography} from '@mui/material';
import {useState} from "react";
import {GqlAccordion} from "./client/types.ts";
import FaqAccordion from "./components/FaqAccordion.tsx";

function App() {
    const [accordion, setAccordion] = useState([]);
    client.query({query: gqlFaqAccordion}).then((result) => setAccordion(result.data.accordionCollection.items))

    return accordion.map(((gqlAccordion: GqlAccordion) => (
        <>
            <Typography key={gqlAccordion._id} variant="h1" data-cy={`accordion-${gqlAccordion._id}`}>{gqlAccordion.title}</Typography>
            {gqlAccordion.accordionItemsCollection.items.map((gqlAccordionItem) => (
                <FaqAccordion key={gqlAccordionItem._id} gqlAccordionItem={gqlAccordionItem}/>))}
        </>
    )))

}

export default App
