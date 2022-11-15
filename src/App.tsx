import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>
	);
}

export default App;
