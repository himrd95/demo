import React, { useState } from 'react';

const Cart = ({ backToHome, data }) => {
	console.log(data, 'data');
	return (
		<div>
			<h3>Hi this is Cart page</h3>
			<button onClick={backToHome}>Back to Home</button>
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
