import Header from './Header';
import Footer from './Footer';
import StockEventsTable from './StockEventsTable'
import "./Home.css"
import React from 'react';

function App({ products, items, setItems })
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
            <StockEventsTable products={products} items={items} setItems={setItems} />
            <Footer />
        </div>
    );
}
export default App;
