import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from './random/hello';
import Home from './wishlist/Home';
import Wishlist from './wishlist/wishlist';
// import ShowRandomUser from './RandomUser/ShowRandomUser';
// import ShowContact from './Contact/ShowContact';
// import AddContact from './Contact/AddContact';
// import EditContact from './Contact/EditContact';
// import ShowContact from './stuPages/showContact';
// import EditStu from './stuPages/EditStu';
// import AddStudent from './stuPages/AddStudent';
import Counter from './store/pages/Counter';
import Navbar from './store/pages/Navbar';
import WishlistPage from './store/pages/WishlistPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/wishlist' element={<WishlistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
