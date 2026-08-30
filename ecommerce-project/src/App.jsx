import { CheckOutPage } from './pages/CheckOutPage';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import {OrdersPage} from './pages/OrdersPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
   
<Route path="orders" element={<OrdersPage/>} />
    </Routes>
  );
}

export default App;