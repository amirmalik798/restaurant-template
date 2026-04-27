import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Cart from "./pages/Cart";
function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
