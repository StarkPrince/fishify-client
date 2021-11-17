import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Error from './components/Error';
import Checkout from './components/Checkout';
import Product from './components/Product';

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
      response.data.forEach(element => { obj[element.id] = 0; })
      await setItems(obj);
    }
    fetchProducts();
  }, [])

  return (

    <div >

      <Router>
        <Routes>
          <Route path="products/:pid" element={<Product products={products} items={items} setItems={setItems} />} />
          <Route path="/checkout" element={<Checkout products={products} items={items} setItems={setItems} />} />
          <Route path="/" element={<Home products={products} items={items} setItems={setItems} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
