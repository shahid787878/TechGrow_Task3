
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Introduction from "./component/Introduction"
import About from './component/About';

import News from './component/News';
import Contact from './component/Contact';
import './App.css';
import Former from './component/Former';
function App() {
return (
	<>
	<Router>

	<div>

		<Navbar />
		<Routes>
	

		<Route path="/home" element={<Introduction />} />
		<Route path="/about" element={<About />} />
		<Route path="/info" element={<News /> } />
		
		
		
		<Route path="/contact" element={<Contact />} />

		</Routes>
	</div>
<Former/>
	</Router>

	</>

);

}
export default App;