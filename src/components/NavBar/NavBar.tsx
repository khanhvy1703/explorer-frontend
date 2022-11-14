import React, { useEffect, useState } from 'react';
import palette from '../../utils/palette.json';
import styled from 'styled-components';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Box, Stack, Text } from '@chakra-ui/react';
import BrandName from '../BrandName/BrandName';
import ManageAuth from './ManageAuth';
import auth from '../../utils/firebase-config';

const NavWrap = styled(Container)`
	margin: 0 auto;
	max-width: 1500px;
`;

export default function NavBar() {
	const [show, setShow] = useState(false); // show Modal
	const [isSignIn, setSignIn] = useState(false);
	const [user, setUser] = useState(true);

	useEffect(() => {
		auth.onAuthStateChanged(userCre => {
			if (userCre) {
				setUser(true)
			}
		})
	})

	const handleModalClose = () => setShow(false);

	const handleSignInModal = () => {
		setSignIn(true);
		setShow(true);
	};

	const hadnleRegisterModal = () => {
		setSignIn(false);
		setShow(true);
	};

	return (
		<Navbar
			className='nav border-bottom navbar-bg'
			bg='light'
			expand='lg'
			sticky='top'
			style={{
				padding: '0px',
				minHeight: '55px',
			}}
		>
			<NavWrap>
				<Navbar.Brand href='/' className='nav-brand'>
					<BrandName />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll' className='justify-content-end'>
					<Nav>
						{/* <Nav.Link>
							<Flex alignItems='center'>
								<FontAwesomeIcon icon={faHome} fontSize={'25px'} />
								<Box marginLeft='5px'>Home</Box>
							</Flex>
						</Nav.Link> */}
						{user ? <Text>Welcome</Text> : <Stack
							direction='row'
							spacing='20px'
							align='center'
							fontWeight='800'
						>
							<Box className='sign-in' onClick={handleSignInModal}>
								Sign in
							</Box>
							<Box
								className='sign-up'
								onClick={hadnleRegisterModal}
								backgroundColor={palette.primary.base}
								border={`2px solid ${palette.primary.base}`}
								p={2}
								color={palette.text.white}
								borderRadius={4}
							>
								Sign up
							</Box>
						</Stack>}
					</Nav>
				</Navbar.Collapse>
			</NavWrap>
			<ManageAuth
				show={show}
				isSignIn={isSignIn}
				onModalClose={handleModalClose}
				onSignIn={() => setSignIn(!isSignIn)}
			/>
		</Navbar>
	);
}
