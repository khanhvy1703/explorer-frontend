import React from 'react';
import { BrowseRestaurantInfo } from '../../generated/graphql';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import noImage from '../../assets/no-image.png';
import Label from '../Label/Label';

export default function BrowseRestaurantCard({
	alias,
	cuisine,
	image,
	isPermanentlyClosed,
	name,
	rating,
	numReview,
	price
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
					<Flex flexDirection='row'>
						<Label
							title='Permanently Closed'
							bgColor='#721f33'
							fontColor='#ffffff'
						/>
					</Flex>
				)}
				<Flex flexDirection='row'>
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
				
			</Flex>
		</Flex>
	);
}
