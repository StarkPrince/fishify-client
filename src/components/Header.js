import React from 'react'
import { Link } from 'react-router-dom'

function Header()
{
    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
            <div className="container"><a className="navbar-brand logo" href="#">Sushil Fish Cart</a><button data-bs-toggle="collapse"
                className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle
                    navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ms-auto">
                        <div className="nav-item"><Link className="nav-link" to="/">Home</Link></div>
                        <div className="nav-item"><Link className="nav-link" to="/checkout">Cart</Link></div>
                        <div className="nav-item"><Link className="nav-link" to="/">Pricing</Link></div>
                        <div className="nav-item"><Link className="nav-link" to="/">About Us</Link></div>
                        <div className="nav-item"><Link className="nav-link" to="/">Contact Us</Link></div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
