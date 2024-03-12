import React from 'react';
import ReactDOM from 'react-dom'
import {Routes,Route} from 'react-router-dom';

// Assets
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Website 
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import TagProducts from './components/TagProducts';
import Checkout from './components/Checkout';
import OrderSuccess from './components/Ordersuccess';
import OrderFailure from './components/OrderFailure';


// Customer Panel
import Register from './components/Customer/Register';
import Login from './components/Customer/Login';
import CustomerLogout from './components/Customer/CustomerLogout';
import Dashboard from './components/Customer/Dashboard';
import Orders from './components/Customer/Orders';
import Wishlist from './components/Customer/Wishlist';
import ChangePassword from './components/Customer/change-password';
import Profile from './components/Customer/Profile';
import AddressList from './components/Customer/AddressList';
import AddAddress from './components/Customer/AddAddress';

// Seller Panel
import SellerRegister from './components/Seller/SellerRegister';
import SellerLogin from './components/Seller/SellerLogin';
import SellerLogout from './components/Seller/SellerLogout';
import SellerDashboard from './components/Seller/SellerDashboard';
import SellerProducts from './components/Seller/SellerProducts';
import AddProduct from './components/Seller/AddProduct';
import ProffesionalOrders from './components/Seller/ProffesionalOrder';
import Customers from './components/Seller/Customer';
import Reports from './components/Seller/Reports';
import ProffesionalProfile from './components/Seller/ProffesionalProfile';
import ProffesionalChangePassword from './components/Seller/ProffesionalChangePassword';


 
function App() {
  return (
    <>
   <Header />
   <Routes>

    {/* Website */}
    <Route path='/' element={<Home />} />
    <Route path='/products' element={<AllProducts />} />
    <Route path='/categories' element={<Categories />} />
    <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>} />
    <Route path='/products/:tag' element={<TagProducts/>} />
    <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>} />
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/order/success' element={<OrderSuccess/>} />
    <Route path='/order/failure' element={<OrderFailure/>} />
    
    {/* Customer Routes */}
    <Route path='/customer/register' element={<Register/>} />
    <Route path='/customer/login' element={<Login/>} />
    <Route path='/customer/logout' element={<CustomerLogout/>} />
    <Route path='/customer/dashboard' element={<Dashboard/>} />
    <Route path='/customer/orders' element={<Orders/>} />
    <Route path='/customer/wishlist' element={<Wishlist/>} />
    <Route path='/customer/change-password' element={<ChangePassword/>} />
    <Route path='/customer/Profile' element={<Profile/>} />
    <Route path='/customer/addresses' element={<AddressList/>} />
    <Route path='/customer/add-address' element={<AddAddress/>} />
    
    {/* Seller Routes */}
    <Route path='/seller/register' element={<SellerRegister/>} />
    <Route path='/seller/login' element={<SellerLogin/>} />
    <Route path='/seller/logout' element={<SellerLogout/>} />
    <Route path='/seller/dashboard' element={<SellerDashboard/>} />
    <Route path='/seller/products' element={<SellerProducts/>} />
    <Route path='/seller/add-product' element={<AddProduct/>} />
    <Route path='/seller/orders' element={<ProffesionalOrders/>} />
    <Route path='/seller/customers' element={<Customers/>} />
    <Route path='/seller/reports' element={<Reports/>} />
    <Route path='/seller/profile' element={<ProffesionalProfile/>} />
    <Route path='/seller/change-password' element={<ProffesionalChangePassword/>} />
    
   </Routes>
   <Footer />
      
    </>
  );
}

export default App;
