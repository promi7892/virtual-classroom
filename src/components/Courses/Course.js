import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import EachCourse from '../EachCourse/EachCourse';
import './Course.css';

const Course = () => {
	const [courses, setCourses] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('./products.JSON')
			.then((response) => response.json())
			.then((data) => setCourses(data));
	}, []);

	const handleAddToCart = (course) => {
		const newCart = [...cart, course];
		setCart(newCart);
	};

	return (
		<div className='shop-container'>
			<div className='course-container'>
				{courses.map((course) => (
					<EachCourse
						key={course.key}
						course={course}
						handleAddToCart={handleAddToCart}
					></EachCourse>
				))}
			</div>
			<div className='cart-container'>
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Course;
