import React from 'react';
import { Box, Divider } from '@chakra-ui/react';
import { BrowseRestaurantInfo } from '../../generated/graphql';
import BrowseRestaurantCard from './BrowseRestaurantCard';

interface IBrowseRestaurantContainerProps {
	restaurants: BrowseRestaurantInfo[];
}

export default function BrowseRestaurantContainer({
	restaurants,
}: IBrowseRestaurantContainerProps) {
	return (
		<>
			{Array.isArray(restaurants) ? (
				restaurants.map((restaurant, index) => {
					return (
					<Box key={index}>
						<BrowseRestaurantCard {...restaurant} />
						{index !== restaurants.length - 1 && <Divider />}
					</Box>)
				})
			) : (
				<Box>Sorry we can't find any restaurants</Box>
			)}
		</>
	);
}
