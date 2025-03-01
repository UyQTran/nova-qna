import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {GqlAccordionItem} from "../client/types.ts";

interface FaqAccordionProps {
    gqlAccordionItem: GqlAccordionItem
}

const FaqAccordion = ({gqlAccordionItem}: FaqAccordionProps)=>
    <Accordion>
        <AccordionSummary
            data-cy={`accordion-item-button-${gqlAccordionItem._id}`}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
        >
            <Typography component="span">{gqlAccordionItem.name}</Typography>
        </AccordionSummary>
        <AccordionDetails data-cy={`accordion-item-details-${gqlAccordionItem._id}`}>
            {gqlAccordionItem.text}
        </AccordionDetails>
    </Accordion>


export default FaqAccordion
