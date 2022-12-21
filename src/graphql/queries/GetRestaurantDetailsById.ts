import { gql } from "@apollo/client";

export const GET_RESTAURANTS_DETAILS = gql(/* GraphQL */ `
  query RestaurantDetail($restaurantAlias: String!) {
    RestaurantDetail(restaurantAlias: $restaurantAlias) {
      restaurantId
      alias
      name
      image
      rating
      price
      yelpReview
      numReview
      cuisine
      transactions
      isPermanentlyClosed
      isCurrentlyOpen
      location
      photos
      openHours {
        dailyOpenHours {
          day
          start
          end
          isOvernight
        }
        hoursType
      }
      phone
      yelpURL
    }
  }
`);