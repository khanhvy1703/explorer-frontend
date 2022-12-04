import React from 'react';
import { Box } from '@chakra-ui/react';
import { BrowseRestaurantInfo } from '../../generated/graphql';
import BrowseRestaurantCard from './BrowseRestaurantCard';

interface IBrowseRestaurantContainerProps {
	restaurants: BrowseRestaurantInfo[];
}

export default function BrowseRestaurantContainer({
	restaurants,
}: IBrowseRestaurantContainerProps) {
  console.log(restaurants)
	return (
		<>
			{Array.isArray(restaurants) ? (
				restaurants.map((restaurant, index) => {
					return <div key={index}>{restaurant.alias}</div>;
				})
			) : (
				<Box>Sorry we can't find any restaurants</Box>
			)}
		</>
	);
}
