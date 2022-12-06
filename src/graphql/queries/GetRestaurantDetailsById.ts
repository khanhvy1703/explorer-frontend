import { gql } from "@apollo/client";

export const GET_RESTAURANTS_DETAILS_BY_ID = gql(/* GraphQL */ `
  query RestaurantDetail($restaurantId: String!) {
    RestaurantDetail(restaurantId: $restaurantId) {
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
        hoursType
        dailyOpenHours {
          day
          start
          end
          isOvernight
        }
      }
      phone
      yelpURL
    }
  }
`);