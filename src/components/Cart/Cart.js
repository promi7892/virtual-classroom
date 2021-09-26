import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const { cart } = props;
	let total = 0;
	for (const course of cart) {
		total = total + course.price;
	}

	// let name = '';
	// for (const names of cart) {
	// 	name = name + names.name;
	// }

	return (
		<div>
			<h2 className='class-details'>Class Details:</h2>
			<h4>Total Course Selected: {props.cart.length}</h4>

			<h4>Total Cost: {total.toFixed(2)}</h4>
			{cart.map((course) => (
				<li className='cart-card'>
					<b>Added to the list</b> : <br />
					{course.name}{' '}
				</li>
			))}
			<br />
			<button className='buy-now'>Buy Now</button>
		</div>
	);
};

export default Cart;
