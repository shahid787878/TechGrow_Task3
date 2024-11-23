// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Introduction from "./component/Introduction"
import PhotoGallery from './component/PhotoGallary';
import './App.css';

function App() {
return (
	<Router>
	<div>
		<Navbar />
		<Routes>
		<Route path="/home" element={<Introduction />} />
		<Route path="/" element={<PhotoGallery />} />

		</Routes>
	</div>
	</Router>
);
}

export default App;