import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

let total = JSON.parse(localStorage.getItem('total')) || 0;

function App() {
	const [state, setState] = useState(false);
	const [data, setData] = useState([]);
	const [totalCount, setTotalCount] = useState(total);
	const handleRoute = () => {
		let initState = JSON.parse(localStorage.getItem('test')) || [];
		setData(initState);
		setState(true);
	};
	const handleTotal = (val) => {
		setTotalCount(val);
	};
	const backToHome = () => {
		let total = JSON.parse(localStorage.getItem('total')) || 0;
		handleTotal(total);
		setState(false);
	};

	return (
		<div className='App'>
			<BrowserRouter>
				{/* <Switch> */}
				{/* <Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/cart'>
					<Cart />
				</Route> */}
				{/* </Switch> */}
				{!state ? (
					<Home
						handleRoute={handleRoute}
						totalCount={totalCount}
						handleTotal={handleTotal}
					/>
				) : (
					<Cart backToHome={backToHome} data={[...data]} />
				)}
			</BrowserRouter>
		</div>
	);
}

export default App;
