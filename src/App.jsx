import './App.css'
import {  Routes, Route } from "react-router";
// import Home from './page/Home';
import About from './page/About';
import Contacts from './page/Contacts';
import Category from './page/Category';
import WishList from './page/WishList';
import Cart from './page/Cart';
import SignIn from './page/SignIn';
function App() {

  return (
    <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/about" element={<About />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/category" element={<Category />} />
    <Route path="/wishList" element={<WishList />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>  
  )
}

export default App
