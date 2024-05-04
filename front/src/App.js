import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Footer from './Navigation/Footer';
import ShowBook from './BookPages/ShowBook';
import ShowBooks from './BookPages/ShowBooks';
import UserBooks from './UserPages/UserBooks';
import UserSearch from './UserPages/UserSearch';
import UserLogin from './UserPages/UserLogin';
import UserReg from './UserPages/UserReg';
import "./App.css";

function App() {
  return (
    <div>
      <header class="menu">
        <Navigation />
      </header>
      <Routes>
        <Route path='/books/' element={<ShowBooks />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/user' element={<UserSearch />} />
        <Route path='/user/books/:login' element={<UserBooks />} />
        <Route path='/user/login/:login' element={<UserLogin />} />
        <Route path='/registration' element={<UserReg />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
