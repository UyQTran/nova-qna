import {gql} from "@apollo/client";

export const gqlFaqAccordion = gql`
    query {
      accordionCollection {
        items{
          _id
          title
          accordionItemsCollection {
            items {
              _id
              name
              text
            }
          }
        }
      }
    }`