import React from 'react';
import { Text } from '@chakra-ui/react';

interface IAuthHeaderProps {
	title: string;
	subTitle: string;
}

export default function AuthHeader({
	title,
	subTitle,
}: IAuthHeaderProps) {
	return (
		<div className='auth-box'>
			<h1 className='auth-title'>{title}</h1>
			<Text fontWeight='500' fontSize='sm'>
				{subTitle}
			</Text>
		</div>
	);
}
