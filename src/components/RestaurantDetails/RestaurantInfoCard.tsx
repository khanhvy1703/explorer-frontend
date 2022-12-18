import React from 'react';
import {
	Image,
	Flex,
	Text,
	Divider,
	Link,
	Box,
	useDisclosure,
} from '@chakra-ui/react';
import { RestaurantDetail } from '../../generated/graphql';
import noImage from '../../assets/no-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faInfoCircle,
	faLocationDot,
	faTag,
	faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
	getOpenHourOfCurrentDay,
	getYelpRatingImage,
} from '../../utils/helper';
import YelpLogo from '../../assets/yelp_logo.png';
import ExplorerRating from './ExplorerRating';
import { OpenHoursModal } from './OpenHoursModal';

const mockRatingDetail = [
	{
		title: 'Food',
	},
	{
		title: 'Service',
	},
	{
		title: 'Ambience',
	},
	{
		title: 'Value',
	},
];

function FaIcon({ icon, color }: { icon: IconProp; color?: string }) {
	return (
		<FontAwesomeIcon
			width='16px'
			height='16px'
			icon={icon}
			color={color ?? '#024b30'}
		/>
	);
}

export default function RestaurantInfoCard({
	image,
	name,
	cuisine,
	location,
	rating,
	yelpReview,
	yelpURL,
	isCurrentlyOpen,
	isPermanentlyClosed,
	openHours,
	price,
}: RestaurantDetail) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Flex marginTop='10px' flexDirection='row'>
			<Image
				height='300px'
				width='700px'
				objectFit='cover'
				src={image ?? noImage}
			/>
			<Flex marginLeft='20px' flexDirection='column' width='100%'>
				{/* Changes this one to location 
				Ex: New York > Upper West Side*/}
				<Text fontSize='12px' color='grey' marginBottom='5px'>
					Restaurant in this area
				</Text>
				<Divider orientation='horizontal' />
				{name && (
					<Text className='alfa-slab-one-font' fontSize='40px' fontWeight='600'>
						{name}
					</Text>
				)}
				{rating && yelpReview && yelpURL && (
					<Link href={yelpURL} target='_blank' className='yelp-hover'>
						<Flex flexDirection='row' alignItems='center'>
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
				<Box marginTop='10px' marginBottom='10px'>
					<ExplorerRating ratingDetails={mockRatingDetail} />
				</Box>
				{cuisine && (
					<Flex flexDirection='row' alignItems='center' textAlign='center'>
						<FaIcon icon={faUtensils} />
						{cuisine.map((title, index) => {
							return (
								<Flex key={index} marginLeft={index === 0 ? '10px' : ''}>
									<Text>{title}</Text>
									{index !== cuisine.length - 1 && (
										<Text marginLeft='5px' marginRight='5px'>
											-
										</Text>
									)}
								</Flex>
							);
						})}
					</Flex>
				)}
				{location && (
					<Flex
						flexDirection='row'
						alignItems='center'
						textAlign='center'
						marginTop='5px'
					>
						<FaIcon icon={faLocationDot} />
						<Text marginLeft='10px'>{location}</Text>
					</Flex>
				)}
				{(isCurrentlyOpen !== undefined ||
					isPermanentlyClosed !== undefined) && (
					<Flex
						flexDirection='row'
						alignItems='center'
						textAlign='center'
						marginTop='5px'
					>
						<FaIcon icon={faClock} />
						{isPermanentlyClosed ? (
							<Text marginLeft='10px' fontWeight='600' color='#FF0000'>
								Permanently Closed
							</Text>
						) : (
							<Flex>
								<Text
									marginLeft='10px'
									marginRight='10px'
									fontWeight='600'
									color={isCurrentlyOpen ? '#05c880' : '#FF0000'}
								>
									{isCurrentlyOpen ? 'Open' : 'Closed'}
								</Text>
								{openHours && (
									<Flex alignItems='center'>
										{openHours[0] && (
											<Text marginRight='5px'>
												{getOpenHourOfCurrentDay(openHours[0])}
											</Text>
										)}
										<Box className='hover' onClick={onOpen}>
											<FaIcon icon={faInfoCircle} color='#262727' />
										</Box>
										<OpenHoursModal isOpen={isOpen} onClose={onClose} dailyOpenHours={openHours[0]?.dailyOpenHours}/>
									</Flex>
								)}
							</Flex>
						)}
					</Flex>
				)}
				{price && (
					<Flex
						flexDirection='row'
						alignItems='center'
						textAlign='center'
						marginTop='5px'
					>
						<FaIcon icon={faTag} />
						<Text marginLeft='10px'>{price}</Text>
					</Flex>
				)}
			</Flex>
		</Flex>
	);
}
