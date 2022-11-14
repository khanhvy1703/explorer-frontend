import React from 'react';
import palette from '../../utils/palette.json';
import { Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';

interface BrandProps {
	brandColor?: string;
	width?: string;
}

export default function BrandName({
	brandColor,
}: BrandProps): JSX.Element {
	return (
		<Flex alignItems={'center'} height={'30px'}>
			<Flex
				alignItems='center'
				justifyContent='center'
				backgroundColor={palette.primary.base}
				padding={3}
				borderRadius='50%'
				height={'40px'}
				width={'40px'}
			>
				<FontAwesomeIcon
					icon={faBinoculars}
					fontSize='23px'
					color={brandColor ?? palette.text.black4}
				/>
			</Flex>
			<Text
				className='tero-font'
				marginLeft='5px'
				fontSize='30px'
				fontWeight='600'
				color={brandColor ?? palette.text.black4}
			>
				explorer.
			</Text>
		</Flex>
	);
}
