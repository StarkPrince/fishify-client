import Header from './components/Header';
import Footer from './components/Footer';
import StockEventsTable from './components/StockEventsTable'
import "./App.css"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App()
{
  const [products, setProducts] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() =>
  {
    const fetchProducts = async () =>
    {
      const response = await axios.get('https://sushil-fish-cart.herokuapp.com/products');
      setProducts(response.data);
    }
    const fetchEvents = async () =>
    {
      const response = await axios.get('https://sushil-fish-cart.herokuapp.com/stock-events')
      setEvents(response.data)
    }
    fetchProducts();
  }, [])

  return (
    <div>
      <Header />
      <StockEventsTable products={products} events={events} />
      <Footer />
    </div>
  );
}
export default App;
