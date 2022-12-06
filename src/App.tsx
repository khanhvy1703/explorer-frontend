import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './screens/homepage';
import RestaurantHomePage from './screens/restaurant';

function App() {
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [status, setStatus] = useState<string>();

	useEffect(() => {
		if (!navigator.geolocation) {
			setStatus('Geolocation is not supported by your browser');
		} else {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setStatus('');
					setLat(position.coords.latitude);
					setLng(position.coords.longitude);
				},
				() => {
					setStatus('Unable to retrieve your location');
				}
			);
		}
	}, [])

	if (status) {
		return <div>{status}</div>
	}

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<HomePage lat={lat} lng={lng} />} />
				<Route path='/restaurant-info/:restaurantId' element={<RestaurantHomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
