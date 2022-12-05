import React, { useEffect, useState } from 'react';
import palette from '../../utils/palette.json';
import styled from 'styled-components';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Box, Stack } from '@chakra-ui/react';
import BrandName from '../BrandName/BrandName';
import ManageAuth from './ManageAuth';
import auth from '../../utils/firebase-config';
import { signOut } from 'firebase/auth';

const NavWrap = styled(Container)`
	margin: 0 auto;
	max-width: 1500px;
`;

export default function NavBar() {
	const [show, setShow] = useState(false); // show Modal
	const [isSignIn, setSignIn] = useState(false);
	const [user, setUser] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged((userCred) => {
			if (userCred) {
				setUser(true);
			}
		});
	}, [user]);

	const handleModalClose = () => setShow(false);
	const handleSignInModal = () => {
		setSignIn(true);
		setShow(true);
	};
	const hadnleRegisterModal = () => {
		setSignIn(false);
		setShow(true);
	};
	const handleSignOut = () => {
		signOut(auth).then(() => {
			setUser(false);
		}).catch((error) => {
			alert(error.message);
			return;
		});
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
			<Container>
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
						{user ? (
							<NavDropdown
								title={
									<span style={{ fontWeight: 600, marginRight: '5px' }}>
										Hello
									</span>
								}
								id='basic-nav-dropdown'
							>
								<NavDropdown.Item href='#'>
									<span style={{ fontSize: '14px' }}>Profile</span>
								</NavDropdown.Item>
								<NavDropdown.Item href='#'>
									<span style={{ fontSize: '14px' }}>Settings</span>
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#'>
									<span onClick={handleSignOut} style={{ fontSize: '14px' }}>Sign out</span>
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<Stack
								direction={['column', 'row']}
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
									p='7px'
									color={palette.text.white}
									borderRadius={4}
								>
									Sign up
								</Box>
							</Stack>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
			<ManageAuth
				show={show}
				isSignIn={isSignIn}
				onModalClose={handleModalClose}
				onSignIn={() => setSignIn(!isSignIn)}
			/>
		</Navbar>
	);
}
