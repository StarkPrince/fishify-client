import Header from './Header';
import Footer from './Footer';
import React from 'react';

function Checkout({ products, items, setItems })
{
    return (
        <div class="area" >
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <Header />
            <Footer />
        </div>
    );
}
export default Checkout;
