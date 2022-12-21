import React from 'react';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { useParams } from 'react-router-dom';
import RestaurantInfoCard from '../components/RestaurantDetails/RestaurantInfoCard';
import { RestaurantDetail } from '../generated/graphql';
import { GET_RESTAURANTS_DETAILS } from '../graphql/queries/GetRestaurantDetailsById';
import { Container } from 'react-bootstrap';
import { Box, Flex, Image } from '@chakra-ui/react';
import googleMap from '../assets/random-google-map.png';

export default function RestaurantHomePage() {
	let restaurant: RestaurantDetail;
	const { restaurantAlias } = useParams();
	const { loading, error, data } = useQuery(GET_RESTAURANTS_DETAILS, {
		variables: {
			restaurantAlias,
		},
	});

	if (loading || data === undefined) {
		return <div>Loading ....</div>;
	}

	if (error) {
		return <div>Oh no error ....</div>;
	}

	restaurant = data.RestaurantDetail;
	return (
		<Box>
			<Container>
				<Box className='box-shadow-card' marginTop='20px'>
					<RestaurantInfoCard {...restaurant} />
				</Box>
				<Flex marginTop='20px' flexDirection='row'>
					<Box width='25%'>
						<Box>
							<Box>
								Overview
							</Box>
							<Box>
								Menu
							</Box>
							<Box>
								Photos
							</Box>
							<Box>
								Reviews
							</Box>
						</Box>
						<Box
							className='box-shadow-card'
							marginTop='10px'
							borderRadius='5px'
						>
							<Image objectFit='fill' src={googleMap} borderRadius='5px' />
						</Box>
					</Box>
					<Box
						width='75%'
						className='box-shadow-card'
						borderRadius='5px'
						marginLeft='10px'
					>
						dsd
					</Box>
				</Flex>
			</Container>
		</Box>
	);
}
