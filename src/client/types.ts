export interface GqlAccordionItem {
    name: string;
    text: string;
}

export interface GqlAccordion {
    title: string;
    accordionItemsCollection: GqlAccordionItemsCollection;
}

export interface GqlAccordionItemsCollection {
    items: GqlAccordionItem[];
}