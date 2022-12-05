import { gql } from "@apollo/client";

export const GET_RESTAURANTS_BY_LOCATION = gql(/* GraphQL */ `
  query restaurantsByLocation($location1: String, $location2: LatLonPosition) {
    RestaurantsByLocation(location1: $location1, location2: $location2) {
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
      yelpURL
    }
  }
`);
