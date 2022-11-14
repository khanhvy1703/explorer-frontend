import React from 'react';
import palette from '../../utils/palette.json';
import { Box, Button } from '@chakra-ui/react';

interface IAuthFooterProps {
	primaryBtnTitle: string;
	title: string;
	secondaryBtnTitle: string;
	onClose: (e: React.MouseEvent) => void;
	onSwitch: () => void;
}

export default function AuthFooter({
	primaryBtnTitle,
	title,
	secondaryBtnTitle,
	onClose,
	onSwitch,
}: IAuthFooterProps) {
	return (
		<>
			<Button
				marginTop='20px'
				backgroundColor={palette.primary.base}
				variant='solid'
				onClick={onClose}
			>
				{primaryBtnTitle}
			</Button>
			<Box className='footer-center'>
				<span>
					{title}
					<Button
						className='hover'
						fontSize='14px'
						marginTop='5px'
						color={palette.primary.base}
						variant='link'
						onClick={onSwitch}
					>
						{secondaryBtnTitle}
					</Button>
				</span>
			</Box>
		</>
	);
}
