import Header from './components/Header';
import Footer from './components/Footer';
import StockEventsTable from './components/StockEventsTable'
import "./App.css"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App()
{
  const [products, setProducts] = useState([])
  const [items, setItems] = useState({})

  useEffect(() =>
  {
    const fetchProducts = async () =>
    {
      const response = await axios.get('https://sushil-fish-cart.herokuapp.com/products');
      await setProducts(response.data);
      let obj = {};
      response.data.forEach(element =>
      {
        obj[element.id] = 0;
      })
      await setItems(obj);
    }
    fetchProducts();

  }, [])

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
