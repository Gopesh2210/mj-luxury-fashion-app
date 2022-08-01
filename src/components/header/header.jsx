import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { logoData } from '../../config/homeConfig';
import { headerOptions, pretSubheader, luxSubheader } from '../../config/headerConfig';
import {routePaths} from '../../config/routePaths'


export default function Header() {
    return (
        <div className="header-container">

            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="logo-container">
                        <Link to={routePaths[0].path}>
                            <img src={require(`../../assets/images/logo/${logoData[1].imageName}.png`)} className="logo-img" alt="logo" />
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown header-dropdown">
                                <span className="link-text nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {headerOptions[0].title}
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <Link to={routePaths[2].path} style={{ textDecoration: 'none' }}>
                                        <li><div className="dropdown-item">{pretSubheader[0].title}</div></li>
                                    </Link>
                                    <li><div className="dropdown-item">{pretSubheader[1].title}</div></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown header-dropdown">
                                <span className="link-text nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {headerOptions[1].title}
                                </span>
                                <ul  className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <Link to={routePaths[3].path} style={{ textDecoration: 'none' }}>
                                        <li><div className="dropdown-item">{luxSubheader[0].title}</div></li>
                                    </Link>
                                </ul>
                            </li>
                            <Link to={routePaths[4].path} style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <span className="nav-link link-text"> {headerOptions[2].title}</span>
                                </li>
                            </Link>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}
