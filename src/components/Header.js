import React from 'react'
import { Link } from 'react-router-dom'

function Header()
{
    return (
        <div className="bg-light">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div class="container d-flex flex-row">
                    <Link className="nav-link" to="/">🐟HOME</Link>
                    <Link className="nav-link" to="/checkout"><i className="bi bi-cart4"></i>Buy</Link>
                    <a className="nav-link" href="#contact"><i className="bi bi-person-lines-fill"></i> Contact</a>
                    <a className="nav-link" href="#about"><i className="bi bi-file-person"></i> About</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample07">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#contact"><i className="bi bi-person-lines-fill"></i> Contact</a></li>
                                    <li><a className="dropdown-item" href="#about"><i className="bi bi-file-person"></i> About</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>


        </div>
    )
}

export default Header
