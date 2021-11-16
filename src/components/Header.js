import React from 'react'
import { Link } from 'react-router-dom'

function Header()
{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light main-navigation">
                <div className="container-fluid d-flex justify-content-around">
                    <div className="d-flex flex-row">
                        <ul className="navbar-nav ml-4 d-flex flex-row">
                            <li className="nav-item m-4 mb-0 mt-0">
                                <Link className="nav-link" to="/">🐟HOME</Link>
                            </li>
                            <li className="nav-item m-4 mb-0 mt-0">
                                <Link className="nav-link" to="/checkout"><i className="bi bi-cart4"></i>BUY</Link>
                            </li>
                        </ul>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav align-content-end ">
                                <li className="nav-item mb-0 mt-0">
                                    <a className="nav-link" href="#contact"><i className="bi bi-person-lines-fill"></i> Contact</a>
                                </li>

                                <li className="nav-item mb-0 mt-0">
                                    <a className="nav-link" href="#about"><i className="bi bi-file-person"></i> About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header
