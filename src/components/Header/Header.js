import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
            <div className="bg-dark header">
            <Navbar className="container justify-content-between p-3">
            <Navbar.Brand href="#home" className="brand-text text-white border border-info rounded p-1">Online School</Navbar.Brand>
                <Form inline>
                <FormControl type="search" placeholder="search" className=" mr-sm-2"/>
                </Form>
                </Navbar>
            </div>
    );
};

export default Header;