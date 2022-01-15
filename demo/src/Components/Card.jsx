import React from 'react';

const Card = ({ sNo, name, img, handleAdd }) => {
	return (
		<div className='card' key={sNo + name}>
			<h3>Product {sNo}</h3>
			<div>{name}</div>
			<button onClick={() => handleAdd(sNo, name, img)}>
				Add to cart
			</button>
		</div>
	);
};

export default Card;
