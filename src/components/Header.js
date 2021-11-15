import React from 'react'
import { Link } from 'react-router-dom'

function Header()
{
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Fish Cart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav align-content-end ">
                            <li><Link className="nav-link" to="/">Home</Link></li>
                            <li><a className="nav-link" href="#about">About</a></li>
                            <li><a className="nav-link" href="#contact">Contact</a></li>
                            <li><Link className="nav-link" to="/checkout">Checkout</Link></li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light main-navigation">
                <div className="container-fluid">
                    <li className="nav-item">
                        <Link className="navbar-brand" to="/">🐟 FISH CART</Link>
                    </li>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav align-content-end ">
                            <li className="nav-item">
                                <a className="nav-link" href="#contact"><i className="bi bi-person-lines-fill"></i> Contact</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/checkout"><i className="bi bi-cart4"></i> Checkout</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about"><i className="bi bi-file-person"></i> About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
