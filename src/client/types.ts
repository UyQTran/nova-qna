export interface GqlAccordionItem {
    _id: string;
    name: string;
    text: string;
}

export interface GqlAccordion {
    _id: string;
    title: string;
    accordionItemsCollection: GqlAccordionItemsCollection;
}

export interface GqlAccordionItemsCollection {
    items: GqlAccordionItem[];
}