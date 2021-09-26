import React from 'react';
import './Header.css';
import logo from '../../Images/education-png-23477.png';

const Header = () => {
	return (
		<div className='header'>
			<img className='logo' src={logo} alt='' />
			<div className='hero-details'>
				<p className='tagline'> Let's Make Learning More Internative</p>
				<h2>
					Create your Own Virtual Classroom at only $<span>500</span>
				</h2>
				<p>Choose Any course you like and start leaning</p>
				<p>
					<small>Offer Limited</small>
				</p>
			</div>
		</div>
	);
};

export default Header;
