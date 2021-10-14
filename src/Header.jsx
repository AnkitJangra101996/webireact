import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap';

function Header() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white shadow-sm p-3 bg-body rounded pt-3 pb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">WebiRect</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link activeclassname="navbar__link--active" className="nav-link mx-1" aria-current="page" to="/">Home</Link>
                            <Link activeclassname="navbar__link--active" className="nav-link mx-1" to="/about">About</Link>
                            <Link activeclassname="navbar__link--active" className="nav-link mx-1" to="/services">Services</Link>
                            <Link activeclassname="navbar__link--active" className="nav-link mx-1" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
