import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/cart'>
						<Cart />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
