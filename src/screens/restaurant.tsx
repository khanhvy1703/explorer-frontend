import { useQuery } from '@apollo/client/react/hooks/useQuery';
import React from 'react';
import { useParams } from 'react-router-dom';
import RestaurantDetailsContainer from '../components/RestaurantDetails/RestaurantDetailsContainer';
import { GET_RESTAURANTS_DETAILS_BY_ID } from '../graphql/queries/GetRestaurantDetailsById';

export default function RestaurantHomePage() {
	const { restaurantId } = useParams();
	const { loading, error, data } = useQuery(GET_RESTAURANTS_DETAILS_BY_ID, {
		variables: {
			restaurantId,
		},
	});

	if (loading || data === undefined) {
		return <div>Loading ....</div>;
	}

	if (error) {
		return <div>Oh no error ....</div>;
	}

	return <RestaurantDetailsContainer restaurant={data.RestaurantDetail} />;
}
