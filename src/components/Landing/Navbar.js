import React from 'react';
import HamburgeMenu from '../../images/Hamburger_icon.png';
import './landing.scss';

const Navbar = ({ logoutUser }) =>  {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <a className="navbar-brand" href="#">SEND-IT</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <img className="navbar-toggler-icon custom-image" src={ HamburgeMenu} />
            </button>
            <div id="navbarNavDropdown" className="navbar-collapse collapse">
                <ul className="navbar-nav mr-auto"> 
                </ul>
               
                    {
                        localStorage.getItem('isAuthenticated') ?
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/orders">Order Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Customer Profiles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" >Logout ( { localStorage.getItem('username') })</a>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Sign Up</a>
                            </li>
                        </ul>

                    }

            </div>
        </nav>
    )
}

export default Navbar;
