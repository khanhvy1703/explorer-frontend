import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Container } from 'react-bootstrap';
import BrandName from '../BrandName/BrandName';

export function Footer() {
	return (
		<Box marginTop='30px' bg='#eaeaea' className='border-top footer' padding='40px 0'>
			<Container>
				<Flex flexDirection='row' alignItems='center' justifyContent='space-evenly'>
					<BrandName />
					<Flex flexDirection='column' alignSelf='flex-start'>
						<Text marginBottom='15px' fontSize='16px' fontWeight='600'>
							About
						</Text>
						<Text>About us</Text>
						<Text>Team</Text>
            <Text>Policy</Text>
					</Flex>
					<Flex flexDirection='column' alignSelf='flex-start'>
						<Text marginBottom='15px' fontSize='16px' fontWeight='600'>
							Discover
						</Text>
						<Text>Github</Text>
            <Text>Linkedin</Text>
					</Flex>
          <Flex flexDirection='column' alignSelf='flex-start'>
						<Text marginBottom='15px' fontSize='16px' fontWeight='600'>
							Contact
						</Text>
						<Text>Email me</Text>
						<Text>Bug</Text>
					</Flex>
				</Flex>
			</Container>
      {/* <Box marginTop='30px' marginBottom='20px' bg='blackAlpha.400' width='100%' height='0.5px'/> */}
      <Text marginTop='35px' fontSize='10px' textAlign='center'>Copyright © 2022-2023. Explorer - Ngoc Le</Text>
		</Box>
	);
}
