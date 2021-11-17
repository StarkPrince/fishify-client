import Header from './Header';
import Footer from './Footer';
import React from 'react';
import Error from './Error'
import { useNavigate } from 'react-router-dom';

function App({ products, items, setItems })
{
    const navigate = useNavigate();
    // console log current url from naviagte
    // console.log(navigate.location.pathname);
    return (
        <div >
            <Header />
            <Error />
            <Footer />
        </div>
    );
}
export default App;
