import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import { numberOrNA } from '../../utils/helper';
type RatingDetail = {
	title: string;
	value?: number;
};
// TODO: there will be a graphql type for this
interface IExplorerRatingProps {
	overall?: number;
	ratingDetails?: RatingDetail[];
	numReviews?: number;
}

function RatingDetailCard({ title, value }: RatingDetail) {
	return (
		<Flex flexDirection='column' alignItems='center'>
			<Text>{numberOrNA(value)}</Text>
			<Text color={value ? '#448787' : '#808080'} fontWeight='600'>
				{title}
			</Text>
		</Flex>
	);
}

export default function ExplorerRating({
	overall,
	ratingDetails,
	numReviews,
}: IExplorerRatingProps) {
	return (
		<Flex flexDirection='row' alignItems='center'>
			<Flex flexDirection='column' marginRight='40px'>
				<Flex
					bg={overall ? '#448787' : '#a9a9a9'}
					borderRadius='50%'
					width='50px'
					height='50px'
					justifyContent='center'
					alignItems='center'
					fontWeight='600'
					fontSize='16px'
					color={overall ? 'white' : 'black'}
					margin='0 auto'
				>
					{numberOrNA(overall)}
				</Flex>
				<Flex fontWeight={numReviews && '600'}>
					<Text>{numReviews ?? 0}</Text>
					<Text marginLeft='5px'>Reviews</Text>
				</Flex>
			</Flex>
			{ratingDetails &&
				ratingDetails.map((element, index) => {
					return (
						<Box
							key={index}
							marginRight={index !== ratingDetails.length - 1 ? '25px' : ''}
						>
							<RatingDetailCard {...element} />
						</Box>
					);
				})}
		</Flex>
	);
}
