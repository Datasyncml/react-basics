import { useState,useEffect } from 'react';
import axios from 'axios';
import { CheckOutPage } from './pages/CheckOutPage';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import {OrdersPage} from './pages/OrdersPage';
import './App.css';


function App() {
      const[cart, setCart]=useState([]);
      useEffect(()=>{
        axios.get('/api/cart-items?expand=product')
        .then((response)=>{
      setCart(response.data);
        });
      });
           
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckOutPage cart={cart}/>} />
   
<Route path="orders" element={<OrdersPage cart={cart}/>} />
    </Routes>
  );
}

export default App;