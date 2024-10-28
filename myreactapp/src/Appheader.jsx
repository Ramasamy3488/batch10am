import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Courses from './Pages/Courses'
import Product from './Pages/Product'
import Footer from './Pages/Footer'
// import Amazonheader from './Componets/AmazonHeader'
// import Childcomp from './Componets/Childcomp'
// import Usestates from './Componets/Usestates'
// import Todolist from './Componets/Todolist'

function Appheader() {

  // const name = "Raja"
  // const age = 26
  // const arrval = ["bala", "kumar", "ravi", "guna", "sathish"]
  // const students = [
  //   {
  //     "id": 1,
  //     "name": "Kumar",
  //     "city": "Chennai"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Sakthi",
  //     "city": "Selam"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Balan",
  //     "city": "Vellor"
  //   }
  // ]

  return (
    <div>
      {/* <Amazonheader /> */}

     {/* <Childcomp name = {name} age = {age} arrval = {arrval} students={students}/> */}

     {/* <Usestates /> */}

     {/* <Todolist /> */}


     {/* ****************************************************************** */}

     <Router>
      <div className="mybox">
        <div>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
          <li><Link to='/course'>COURSE</Link></li>
          <li><Link to='/product'>PRODUCT</Link></li>
        </div>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/course' element={<Courses/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        
      </Routes>
     </Router>

     <Footer />
  


    </div>
  )
}

export default Appheader