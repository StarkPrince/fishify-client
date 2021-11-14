import StockEventsTable from './StockEventsTable'
import Header from './Header';
import Footer from './Footer';
import React from 'react';

function App({ products, items, setItems })
{
    return (
        <div >
            <Header />
            <StockEventsTable products={products} items={items} setItems={setItems} />
            <Footer />
        </div>
    );
}
export default App;
