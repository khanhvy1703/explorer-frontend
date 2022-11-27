import React, { useState } from 'react';
import palette from '../utils/palette.json';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationArrow,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {
	Popover,
	Input,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	InputGroup,
	InputRightElement,
	Button,
	Divider,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { GET_RESTAURANTS_BY_LOCATION } from '../graphql/queries/getAllRestaurantsByLocation';
import { useQuery } from '@apollo/client';

interface IHomePageProps {
	lat?: number;
	lng?: number;
}

export default function HomePage({ lat, lng }: IHomePageProps) {
	const { onOpen, onClose, isOpen } = useDisclosure();
	const [current, setCurrent] = useState(true);
	const [enterLocation, setEnterLocation] = useState<String>('');
	const [showLocation, setShowLocation] = useState<String>('');

	function handleSearch() {
		if (enterLocation) {
			setCurrent(false);
			setShowLocation(enterLocation);
			onClose();
		}
	}

	const { loading, error, data } = useQuery(GET_RESTAURANTS_BY_LOCATION, {
		variables: {
			location1: showLocation,
			location2: {
				latitude: lat,
				longitude: lng,
			},
		},
	});

	if (loading || data === undefined) {
		return <div>Loading ....</div>;
	}
	
	if (error) {
		return <div>Oh no error ....</div>;
	}

	return (
		<div>
			<Container>
				<div className='home-wrap'>
					<span style={{ fontWeight: 600, marginRight: '10px' }}>
						{current
							? 'The results are based on your current location.'
							: `Showing restaurants in ${showLocation}`}
					</span>
					<span
						className='text-hover'
						style={{ display: 'flex', alignItems: 'center' }}
					>
						<FontAwesomeIcon
							icon={faLocationArrow}
							color={palette.text.green}
							fontSize='20px'
						/>
						<Popover onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
							<PopoverTrigger>
								<span
									style={{
										fontWeight: 600,
										marginLeft: '5px',
										color: `${palette.text.green}`,
									}}
								>
									Change location
								</span>
							</PopoverTrigger>
							<PopoverContent p={3}>
								<PopoverArrow />
								<InputGroup size='sm'>
									<Input
										fontSize='12px'
										p='2'
										type='text'
										placeholder='Enter location'
										onChange={(e) => setEnterLocation(e.target.value)}
									/>
									<InputRightElement width='4.5rem'>
										<Button h='1.5rem' size='sm' onClick={handleSearch}>
											<FontAwesomeIcon icon={faMagnifyingGlass} />
										</Button>
									</InputRightElement>
								</InputGroup>
							</PopoverContent>
						</Popover>
					</span>
				</div>
			</Container>
			<Divider orientation='horizontal' />
			<Container>
				<Text className='tero-font' fontSize='36px' fontWeight='600'>
					{current ? 'Restaurants nearby' : `Restaurants in ${showLocation}`}
				</Text>
			</Container>
		</div>
	);
}
