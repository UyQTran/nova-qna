export const accordionItems = [
    {
        _id: '123',
        name: 'Hvilke selskaper har Uy jobbet for?',
        text: 'EVRY, Dfind Consulting, Apriil og Webstep'
    },
    {
        _id: '234',
        name: 'Hvor gammel er Uy?',
        text: 'Han er 32 år gammel'
    }
];

export const accordions = [
    {
        _id: '123',
        title: 'Uy sine FAQs',
        accordionItemsCollection: {items: accordionItems}
    }
];

export const mockResolvers = {
    Query: {
        accordionCollection: () => ({items: accordions}),
    },
};