import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Header from './components/header/Header';
import Register from './register/Register';
import Product from './products/Product';
import RequireAuth from './components/requireAuth/RequireAuth';
import Order from './components/order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/order' element={
          <RequireAuth>
            <Order></Order>

          </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
