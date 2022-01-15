import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData, uploadData } from '../Utils/helper';
import Card from './Card';

const data = [
	{
		sNo: 1,
		name: 'Mac',
		img: '',
	},
	{
		sNo: 2,
		name: 'Window',
		img: '',
	},
	{
		sNo: 3,
		name: 'Linux',
		img: '',
	},
];

const Home = () => {
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		setTotalCount(getData('total') || 0);
	}, []);

	const handleAdd = (id, name, img) => {
		let initState = getData('demo') || [];
		let total = getData('total') || 0;
		uploadData('total', total + 1);
		setTotalCount(total + 1);
		let temp = initState.find((item) => item.id === id);

		if (temp) {
			initState = initState.map((item) =>
				item.id === id
					? {
							...item,
							count: item.count + 1,
					  }
					: item,
			);
		} else {
			initState.push({
				id,
				name,
				img,
				count: 1,
			});
		}

		uploadData('demo', initState);
	};

	return (
		<div>
			<Link className='link' to='/cart'>
				<h1>Total items in cart : {totalCount}</h1>
			</Link>
			<div style={{ display: 'flex' }}>
				{data?.map((item) => (
					<Card {...item} handleAdd={handleAdd} />
				))}
			</div>
		</div>
	);
};

export default Home;
