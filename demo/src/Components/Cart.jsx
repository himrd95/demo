import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../Utils/helper';

// const InitData = getData('demo') || [];
const Cart = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(getData('demo') || []);
	}, []);
	return (
		<div>
			<h3>Hi this is Cart page</h3>
			<button>
				<Link className='link' to='/'>
					Back to Home
				</Link>
			</button>
			{data?.map((item) => (
				<div>
					<div>{item.name}</div>
					<div>{item.count}</div>
				</div>
			))}
		</div>
	);
};

export default Cart;
