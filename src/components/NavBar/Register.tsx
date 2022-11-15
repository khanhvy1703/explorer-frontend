import React, { useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Modal } from 'react-bootstrap';
import {
	Input,
	InputRightElement,
	Button,
	FormControl,
	FormLabel,
	InputGroup,
	Text,
} from '@chakra-ui/react';
import auth from '../../utils/firebase-config';
import AuthFooter from './AuthFooter';
import AuthHeader from './AuthHeader';

interface IRegisterProps {
	onClose: () => void;
	onSwitch: () => void;
}

export default function Register({ onClose, onSwitch }: IRegisterProps) {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPass, setShowPass] = useState(false);
	const [showConfirm, setshowConfirm] = useState(false);

	const handleShowPass = () => setShowPass(!showPass);
	const handleShowConfirm = () => setshowConfirm(!showConfirm);
	const handleRegister = () => {
		if (!username) {
			alert('username error');
			return;
		} else if (!email) {
			alert('email error');
			return;
		} else if (!password) {
			alert('password error');
			return;
		} else if (!confirmPassword) {
			alert('confirm password error');
			return;
		} else if (password !== confirmPassword) {
			alert('password does not match');
			return;
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then(() => {
					onClose();
				})
				.catch((err) => {
					const error = err as FirebaseError;
					console.log(error);
					alert(error.code);
					return;
				});
		}
	};

	return (
		<>
			<Modal.Header closeButton>
				<AuthHeader title='Register' subTitle={'Create a new account 👇'} />
			</Modal.Header>
			<Modal.Body className='auth-box'>
				<FormControl>
					{/* Username */}
					<FormLabel fontWeight='600' fontSize='14px'>
						<span>Username</span>
						<Text fontSize='12px' fontWeight='500'>
							You won't be able to change it later. Choose carefully.
						</Text>
					</FormLabel>
					<Input
						fontSize='16x'
						pr='4.5rem'
						type='text'
						placeholder='Enter username'
						autoFocus
						spellCheck={false}
						onChange={(e) => setUsername(e.target.value)}
					/>
					{/* Email */}
					<FormLabel fontWeight='600' fontSize='14px' marginTop='10px'>
						Email
					</FormLabel>
					<Input
						fontSize='16px'
						pr='4.5rem'
						type='email'
						placeholder='Enter email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					{/* Password */}
					<FormLabel fontWeight='600' fontSize='14px' marginTop='10px'>
						<span>Password</span>
						<Text fontWeight='500' fontSize='12px'>
							{password.length < 6
								? '❌ At least 6 characters'
								: '✔️ At least 6 characters'}
						</Text>
					</FormLabel>
					<InputGroup size='md'>
						<Input
							fontSize='16px'
							pr='4.5rem'
							type={showPass ? 'text' : 'password'}
							placeholder='Enter password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<InputRightElement width='4.5rem'>
							<Button h='1.75rem' size='sm' onClick={handleShowPass}>
								{showPass ? 'Hide' : 'Show'}
							</Button>
						</InputRightElement>
					</InputGroup>
					{/* Confirm Password */}
					<FormLabel fontWeight='600' fontSize='14px' marginTop='10px'>
						Confirm Password
					</FormLabel>
					<InputGroup size='md'>
						<Input
							fontSize='16px'
							pr='4.5rem'
							type={showConfirm ? 'text' : 'password'}
							placeholder='Confirm your password'
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<InputRightElement width='4.5rem'>
							<Button h='1.75rem' size='sm' onClick={handleShowConfirm}>
								{showConfirm ? 'Hide' : 'Show'}
							</Button>
						</InputRightElement>
					</InputGroup>
				</FormControl>
				<AuthFooter
					primaryBtnTitle='Register'
					title='Already have an account? '
					secondaryBtnTitle='Sign In'
					onClose={handleRegister}
					onSwitch={onSwitch}
				/>
			</Modal.Body>
		</>
	);
}
