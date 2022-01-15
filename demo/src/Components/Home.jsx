import React, { useState } from 'react';
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

const Home = ({ handleRoute, totalCount, handleTotal }) => {
	const handleAdd = (id, name, img) => {
		let initState = JSON.parse(localStorage.getItem('test')) || [];
		let total = JSON.parse(localStorage.getItem('total')) || 0;
		handleTotal(total);
		localStorage.setItem('total', JSON.stringify(+total + 1));
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

		localStorage.setItem('test', JSON.stringify(initState));
	};

	return (
		<div>
			<h1 onClick={handleRoute}>
				Total items in cart : {totalCount}
			</h1>
			<div>
				{data?.map((item) => (
					<Card {...item} handleAdd={handleAdd} />
				))}
			</div>
		</div>
	);
};

export default Home;
