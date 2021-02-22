import './assets/css/header.css';
import logo from './assets/images/logo.png';
import {
    Link,
    NavLink
} from "react-router-dom";
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import { useState } from "react";

function Header({ t }) {
    const [isActive, setActive] = useState();
    const language = localStorage.getItem('lang');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lang",lng);
    }

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="flex justify-between align-center">
                    <div className="logo">
                        <NavLink to={'/'+language+''} className="header-logo">
                            <img src={logo} alt="M. fund Logo"/>
                        </NavLink>
                    </div>
                    <div className={`flex justify-between align-center w-100 mobile-nav ${isActive ? "active" : ""}`} id="menu" onClick={handleToggle}>
                        <nav className="header-nav">
                            <ul className="header-menu align-center flex">
                                <li className="header-menu-item has-submenu">
                                    <NavLink to={'/'+language+'/alexi'} activeClassName="active" className="header-menu-link">{ t ('menu.alex') }</NavLink>
                                    <ul className="submenu">
                                        <li>
                                            <NavLink to={'/'+language+'/alexi/bio'} >{ t ('menu.bio') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/alexi/photos'} >{ t ('menu.photos') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/alexi/manuscripts'} >{ t ('menu.manuscripts') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/alexi/press'} >{ t ('menu.press') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/alexi/media'} >{ t ('menu.media') }</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header-menu-item has-submenu">
                                    <NavLink to={'/'+language+'/vakhtang'} activeClassName="active" className="header-menu-link">{ t ('menu.vaxtang') }</NavLink>
                                    <ul className="submenu">
                                        <li>
                                            <NavLink to={'/'+language+'/vakhtang/bio'} >{ t ('menu.bio') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/vakhtang/photos'} >{ t ('menu.photos') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/vakhtang/manuscripts'} >{ t ('menu.manuscripts') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/vakhtang/press'} >{ t ('menu.press') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/vakhtang/media'} >{ t ('menu.media') }</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header-menu-item has-submenu">
                                    <NavLink to={'/'+language+'/foundation'} activeClassName="active" className="header-menu-link">{ t ('menu.found') }</NavLink>
                                    <ul className="submenu">
                                        <li>
                                            <NavLink to={'/'+language+'/foundation/about'} >{ t ('menu.about') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/foundation/photos'} >{ t ('menu.photos') }</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/'+language+'/foundation/team'} >{ t ('menu.team') }</NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="header-menu-item">
                                    <NavLink to={'/'+language+'/projects'} activeClassName="active" className="header-menu-link">{ t ('menu.projects') }</NavLink>
                                </li>
                                <li className="header-menu-item">
                                    <NavLink to={'/'+language+'/contact'} activeClassName="active" className="header-menu-link">{ t ('menu.contact') }</NavLink>
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
