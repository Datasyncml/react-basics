import { useState,useEffect } from 'react';
import axios from 'axios';
import { CheckOutPage } from './pages/Checkout/CheckOutPage';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import {OrdersPage} from './pages/orders/OrdersPage';
import './App.css';


function App() {
      const[cart, setCart]=useState([]);
         const loadCart = async () => {
        const response = await axios.get('/api/cart-items?expand=product');

        setCart(response.data);
    };
      useEffect(() => {
    loadCart();

}, []);
           
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckOutPage cart={cart}/>} />
   
<Route path="orders" element={<OrdersPage cart={cart}/>} />
    </Routes>
  );
}

export default App;