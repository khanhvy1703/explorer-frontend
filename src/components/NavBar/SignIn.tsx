import React, { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Modal } from 'react-bootstrap';
import {
	Input,
	InputRightElement,
	Button,
	FormControl,
	FormLabel,
	InputGroup,
} from '@chakra-ui/react';
import palette from '../../utils/palette.json';
import auth from '../../utils/firebase-config';
import AuthFooter from './AuthFooter';
import AuthHeader from './AuthHeader';

interface ISignInProps {
	onClose: () => void;
	onSwitch: () => void;
}

export default function SignIn({ onClose, onSwitch }: ISignInProps) {
	const [show, setShow] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleShow = () => setShow(!show);

	const signInWIthEmailPass = async () => {
		try {
			const credentials = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			if (credentials.user) {
				onClose();
			}
		} catch (err) {
			const error = err as FirebaseError;
			console.log(error)
			alert(error.code);
			return;
		}
	};

	const handleSignIn = (event: React.MouseEvent) => {
		event.preventDefault();
		if (!email.length) {
			alert("Email can't be empty");
			return;
		}
		if (!password.length) {
			alert("Password can't be empty");
			return;
		}
		signInWIthEmailPass();
	};

	return (
		<>
			<Modal.Header closeButton>
				<AuthHeader title='Sign In' subTitle='Welcome back 👋' />
			</Modal.Header>
			<Modal.Body className='auth-box'>
				<FormControl>
					{/* Email */}
					<FormLabel fontWeight='600' fontSize='14px'>Email</FormLabel>
					<Input
						fontSize='16px'
						pr='4.5rem'
						type='email'
						placeholder='Enter email'
						autoFocus
						onChange={(e) => setEmail(e.target.value)}
					/>
					{/* Password */}
					<FormLabel fontWeight='600' fontSize='14px' marginTop='10px'>
						Password
					</FormLabel>
					<InputGroup size='md'>
						<Input
							fontSize='16px'
							pr='4.5rem'
							type={show ? 'text' : 'password'}
							placeholder='Enter password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<InputRightElement width='4.5rem'>
							<Button h='1.75rem' size='sm' onClick={handleShow}>
								{show ? 'Hide' : 'Show'}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<Button
					className='hover forgot-pass'
					fontSize='14px'
					marginTop='8px'
					color={palette.primary.base}
					variant='link'
				>
					Forgot Your Password?
				</Button>
				<AuthFooter
					primaryBtnTitle='Sign In'
					title={"Don't have an account? "}
					secondaryBtnTitle='Create Account'
					onClose={(e: React.MouseEvent) => handleSignIn(e)}
					onSwitch={onSwitch}
				/>
			</Modal.Body>
		</>
	);
}
