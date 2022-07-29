import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/mj-logo.jpeg';

export default function Header() {
    return (
        <div className="header-container">

            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logo} className="logo-img" alt="logo" />
                        </Link>
                    </div>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/seasonal_collection" style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <span className="nav-link link-text">Seasonal Collection</span>
                                    <hr></hr>
                                </li>
                            </Link>
                            <Link to="/premium_collection" style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <span className="nav-link link-text">Premium Collection</span>
                                    <hr></hr>
                                </li>
                            </Link>
                            <Link to="/discover" style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <span className="nav-link link-text">Discover</span>
                                    <hr></hr>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
