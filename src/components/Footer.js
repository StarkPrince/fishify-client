import React from 'react'

function Footer()
{
    return (
        <div id="about">
            <footer className="text-center text-md-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center  p-4 border-bottom"
                >
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h4 className="text-uppercase fw-bold mb-4">
                                    <i className="bi bi-gem"></i> Company name
                                </h4>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h4 className="text-uppercase fw-bold mb-4"><i className="bi bi-link"></i> Useful links</h4>
                                <p><a href="#!" className="text-reset">Pricing</a></p>
                                <p><a href="#!" className="text-reset">Orders</a></p>
                                <p><a href="#!" className="text-reset">Help</a></p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" id="contact">
                                <h4 className="text-uppercase fw-bold mb-4"><i className="bi bi-person-rolodex"></i> Contact</h4>
                                <p><i className="bi bi-house"></i> LaheriaSarai, Darbhanga</p>
                                <p><i className="bi bi-envelope"></i> info@example.com</p>
                                <p><i className="bi bi-telephone-fill"></i> +91 7070909043</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" >
                    © 2021 Copyright: Sushil Fish Cart
                </div>
            </footer>
        </div>
    )
}

export default Footer