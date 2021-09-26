import React from 'react';
import './EachCourse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const EachCourse = (props) => {
	const {
		name,
		description,
		content,
		author,
		price,
		rating,
		enrolled,
		language,
	} = props.course;
	const icon = <FontAwesomeIcon className='icon' icon={faBook} />;
	return (
		<div className='course'>
			<div>
				<img src={content} alt='' className='course-img' />
				<h4 className='course-name'>{name}</h4>
				<p>
					<b>Description:</b> {description}
				</p>
				<p>
					<small>by: {author}</small>
				</p>
				<h4>Price: ${price}</h4>
				<p>
					<b>Ratings:</b> {rating}{' '}
				</p>
				<p className='light-text'>
					{' '}
					<small>Total {enrolled} </small>
				</p>
				<p className='light-text'>
					<small>Available in {language}</small>
				</p>

				<button
					onClick={() => props.handleAddToCart(props.course)}
					className='btn-regular'
				>
					{icon}
					Add Course
				</button>
			</div>
		</div>
	);
};

export default EachCourse;
