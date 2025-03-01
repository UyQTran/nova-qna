import './App.css'
import {client} from "./client/gqlClient.ts";
import {gqlFaqAccordion} from "./client/queries.ts";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import {GqlAccordion} from "./client/types.ts";

function App() {
    const [accordion, setAccordion] = useState([]);
    client.query({query: gqlFaqAccordion}).then((result) => setAccordion(result.data.accordionCollection.items))

    return (
        <>
            {accordion.map(((gqlAccordion: GqlAccordion) => (
                <>
                    <Typography component="h1">{gqlAccordion.title}</Typography>
                    {gqlAccordion.accordionItemsCollection.items.map(gqlAccordionItem => (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography component="span">{gqlAccordionItem.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {gqlAccordionItem.text}
                            </AccordionDetails>
                        </Accordion>))}
                </>
            )))}
        </>
    )
}

export default App
