import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import Registration from './Pages/Registration.jsx';
import Userlist from './Pages/Userlist.jsx';
import Update from './Pages/Update.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary whitecol">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to='/' className="nav-link">Registration</Link> 
              </li>
              <li className="nav-item">
                <Link to='/userlist' className="nav-link">UserList</Link>
              </li>
              <li className="nav-item">
                <Link to='/update' className="nav-link">Update</Link>
              </li>

            </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path='/' element={<Registration />}></Route>
          <Route path='/userlist' element={<Userlist />}></Route>
          <Route path='/update' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
