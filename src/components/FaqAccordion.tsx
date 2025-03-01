import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {GqlAccordionItem} from "../client/types.ts";

interface FaqAccordionProps {
    gqlAccordionItem: GqlAccordionItem
}

const FaqAccordion = ({gqlAccordionItem}: FaqAccordionProps)=>
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
    </Accordion>


export default FaqAccordion
