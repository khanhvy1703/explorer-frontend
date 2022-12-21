import React from 'react';
import { BrowseRestaurantInfo } from '../../generated/graphql';
import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';
import noImage from '../../assets/no-image.png';
import Label from '../Label/Label';
import { getYelpRatingImage } from '../../utils/helper';
import YelpLogo from '../../assets/yelp_logo.png';

export default function BrowseRestaurantCard({
	alias,
	cuisine,
	image,
	isPermanentlyClosed,
	name,
	rating,
	yelpReview,
	yelpURL,
	price,
	transactions,
}: BrowseRestaurantInfo) {
	const getImage = image ?? noImage;
	return (
		<Flex flexDirection='row' marginTop='20px' marginBottom='20px'>
			<Image
				boxSize='200px'
				objectFit='cover'
				src={getImage}
				alt={alias ?? ''}
				borderRadius='10px'
				marginLeft='20px'
			/>
			<Flex marginLeft='20px' flexDirection='column'>
				<Text className='alfa-slab-one-font' fontWeight='500' fontSize='34px'>
					{name}
				</Text>
				{isPermanentlyClosed && (
					<Flex flexDirection='row' marginBottom='5px'>
						<Label
							title='Permanently Closed'
							bgColor='#721f33'
							fontColor='#ffffff'
						/>
					</Flex>
				)}
				<Flex flexDirection='row' alignItems='center'>
					<Text
						className='alfa-slab-one-font'
						fontSize='20px'
						marginRight={'6px'}
					>
						{price} -{' '}
					</Text>
					{cuisine &&
						cuisine.map((cato, index) => {
							return (
								cato && (
									<Box key={index} marginLeft={index === 0 ? '' : '5px'}>
										<Label title={cato} />
									</Box>
								)
							);
						})}
				</Flex>
				{rating && yelpReview && yelpURL && (
					<Link href={yelpURL} target='_blank' className='yelp-hover'>
						<Flex flexDirection='row' alignItems='center' marginTop='5px'>
							<Image src={getYelpRatingImage(rating)} alt={rating.toString()} />
							<Image
								src={YelpLogo}
								alt='yelp-logo'
								width='50px'
								height='20px'
								marginLeft='15px'
							/>
							<Text marginLeft='10px'>{`(Based on ${yelpReview} reviews)`}</Text>
						</Flex>
					</Link>
				)}
				{transactions && (
					<Flex alignItems='center' marginTop='5px'>
						{transactions.map((trans, index) => {
							return (
								<Text
									marginLeft={index !== 0 ? '10px' : ''}
									key={index}
									fontWeight='600'
								>{`✔️ ${trans}`}</Text>
							);
						})}
					</Flex>
				)}
				<Link
					href={`/restaurant-info/${alias}`}
					marginTop='auto'
					marginRight='auto'
					bg='#90b099'
					fontSize='14px'
					fontWeight='600'
					padding='5px 10px'
					borderRadius='5px'
					className='view-restaurant-hover'
				>
					View this restaurant
				</Link>
			</Flex>
		</Flex>
	);
}
