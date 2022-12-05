import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function Label({
	bgColor,
	fontColor,
	title,
}: {
	bgColor?: string;
	fontColor?: string;
	title: string;
}) {
	return (
		<Flex
			className='alfa-slab-one-font'
			flexWrap='nowrap'
			paddingLeft='7px'
			paddingRight='7px'
			paddingTop='3px'
			bg={bgColor ?? '#E5E4E2'}
			borderRadius='5px'
			justifyContent='center'
			alignItems='center'
			textAlign='center'
			color={fontColor ?? 'black'}
		>
			{title}
		</Flex>
	);
}
