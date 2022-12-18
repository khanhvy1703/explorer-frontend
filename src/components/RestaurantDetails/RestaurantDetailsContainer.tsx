import React from 'react';
import { RestaurantDetail } from '../../generated/graphql';
import { Container } from 'react-bootstrap';
import RestaurantInfoCard from './RestaurantInfoCard';

interface IBrowseRestaurantContainerProps {
	restaurant: RestaurantDetail;
}

export default function RestaurantDetailsContainer({
	restaurant,
}: IBrowseRestaurantContainerProps) {
	return (
		<Container>
			<RestaurantInfoCard {...restaurant}/>
		</Container>
	);
}
