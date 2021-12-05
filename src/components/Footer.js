import React from 'react'

function Footer()
{
    return (
        <div id="about">
            <footer className="page-footer dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h5>Get started</h5>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Sign up</a></li>
                                <li><a href="#">Downloads</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h5>About us</h5>
                            <ul>
                                <li><a href="#">Company Information</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Reviews</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h5>Contact</h5>
                            <ul>
                                <li><a href="#"><i className="bi bi-house"></i> LaheriaSarai, Darbhanga</a></li>
                                <li><a href="#"><i className="bi bi-envelope"></i> info@example.com</a></li>
                                <li><a href="#"><i className="bi bi-telephone-fill"></i> +91 7070909043</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h5>Legal</h5>
                            <ul>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>© 2021 Copyright: Sushil Fish Cart</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer