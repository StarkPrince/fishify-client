import Checkout from './components/Checkout';
import Home from './components/Home';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App()
{
  const [products, setProducts] = useState([])
  const [items, setItems] = useState({})

  useEffect(() =>
  {
    const fetchProducts = async () =>
    {
      const response = await axios.get('http://localhost:1337/products');
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
          <Route path="/checkout" element={<Checkout products={products} items={items} setItems={setItems} />} />
          <Route path="/" element={<Home products={products} items={items} setItems={setItems} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
