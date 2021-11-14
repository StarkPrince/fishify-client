import Cart from './Cart';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Checkout.css'

function Checkout({ products, items, setItems })
{
    return (
        <div>
            <Header />
            <Cart products={products} items={items} setItems={setItems} />
            <Footer />
        </div>
    );
}
export default Checkout;
