import React from 'react';
import { Routes, Route} from 'react-router-dom';

// Companit
import Header from './Companets/header/header';
import Footer from './Companets/footer/footer';
// Pages

import Home from './Pages/Home/Home';
import Profiler from './Pages/Profile/Profile';

function AuthenticatedApp() {
	return (
		<>
			<div className='container '>
				<div className='box1'>
					<Header />

					
					<main>
						<Routes>
							<Route path='/' element={<Home/>}/>
							<Route path='/Profile/:id' element={<Profiler/>}/>
						</Routes>
					</main>

					<Footer />
				</div>
			</div>
		</>
	);
}

export default AuthenticatedApp;
