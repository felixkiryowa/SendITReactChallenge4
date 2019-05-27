import React from 'react';
import './landing.scss';

 const Navbar = () =>  {
    return (
        <nav className="navbar navbar-default custom-navbar">
        <div className="container-fluid"> 
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">SEND-IT</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/register">Sign Up</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
       </div>
    </nav>
    )
}

export default Navbar;
