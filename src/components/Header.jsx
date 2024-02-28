// Navigation.js
import React from "react"

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/logo.png';
import { ArrowRight, Menu } from 'react-feather'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
    // page content
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1200,
        });
    }, [])
    return (
        <Navbar expand="lg" className="py-4 navigation header-padding" id="navbar">
            <div className="container-fluid theme-container p-0">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" className="img-fluid" />
                </Link>

                <Navbar.Toggle
                    aria-controls="stoycnav"
                    aria-label="Toggle navigation"
                    className="navbar-toggler collapsed"
                >
                    <span><Menu /></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="stoycnav" className="text-center justify-content-end">
                    <Nav className="ml-0 ml-md-5">
                        <Nav.Item>
                            <Link to="/" className="nav-link">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/about" className="nav-link">Culture</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/services" className="nav-link">Capabilities</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/projects" className="nav-link">Portfolio</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/contact" className="nav-link btn btn-solid-border btn-round-full" id="header-cta">
                                contact <ArrowRight className="ml-2" />
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Header;
