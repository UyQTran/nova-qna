import {gql} from "@apollo/client";

export const gqlFaqAccordion = gql`
    query {
      accordionCollection {
        items{
          title
          accordionItemsCollection {
            items {
              name
              text
            }
          }
        }
      }
    }`