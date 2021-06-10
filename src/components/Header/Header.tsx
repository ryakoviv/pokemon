import logo from '../../assets/logo.svg';
import React from 'react';
import './Header.scss';
import Navbar from 'react-bootstrap/Navbar'

function Header () {
    return (
        <header>
            <Navbar bg='dark' variant="dark">
                <Navbar.Brand>
                    <img src={logo} alt="logo"/> Pokemon
                </Navbar.Brand>
            </Navbar>
        </header>
    );
}

export default Header