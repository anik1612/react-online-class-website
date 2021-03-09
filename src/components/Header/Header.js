import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
	return (
		<Navbar
			className='container-fluid justify-content-between p-3 bg-dark'
			sticky='top'
		>
			<Navbar.Brand
				href='#home'
				className='brand-text text-white border border-info rounded py-2 px-3'
			>
				Online School
			</Navbar.Brand>
			<Form inline>
				<FormControl
					type='search'
					placeholder='search'
					className=' mr-sm-2'
				/>
				<Button variant='success'>Search</Button>
			</Form>
		</Navbar>
	);
};

export default Header;
