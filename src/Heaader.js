import './assets/css/header.css';
import logo from './assets/images/logo.png'
import {
    Link
} from "react-router-dom";
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import { useState } from "react";

function Header({ t }) {
    const [isActive, setActive] = useState("false");
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="flex justify-between align-center">
                    <div className="logo">
                        <Link to="/" className="header-logo">
                            <img src={logo} alt="M. fund Logo"/>
                        </Link>
                    </div>
                    <div className={`flex justify-between align-center w-100 mobile-nav ${isActive ? "active" : ""}`} id="menu" onClick={handleToggle}>
                        <nav className="header-nav">
                            <ul className="header-menu align-center flex">
                                <li className="header-menu-item">
                                    <Link to="/profile/alexi" className="header-menu-link">{ t ('menu.alex') }</Link>
                                </li>
                                <li className="header-menu-item">
                                    <Link to="/profile/vakhtang" className="header-menu-link">{ t ('menu.vaxtang') }</Link>
                                </li>
                                <li className="header-menu-item">
                                    <Link to="/foundation" className="header-menu-link">{ t ('menu.found') }</Link>
                                </li>
                                <li className="header-menu-item">
                                    <Link to="/projects" className="header-menu-link">{ t ('menu.projects') }</Link>
                                </li>
                                <li className="header-menu-item">
                                    <Link to="/contact" className="header-menu-link">{ t ('menu.contact') }</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header-lang">
                            <button onClick={() => changeLanguage('en')}>ENG</button>
                            /
                            <button onClick={() => changeLanguage('ka')}>GEO</button>
                        </div>
                    </div>
                    <button className={`burger ${isActive ? "active" : ""}`} id="burger" onClick={handleToggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default withNamespaces()(Header);
