import StockEventsTable from './StockEventsTable'
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import Banner from './Banner';

function App({ products, items, setItems })
{
    return (
        <div >
            <Header />
            <Banner />
            <StockEventsTable products={products} items={items} setItems={setItems} />
            <Footer />
        </div>
    );
}
export default App;
