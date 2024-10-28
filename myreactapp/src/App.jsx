import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import axios from 'axios'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Courses from './Pages/Courses'
import Product from './Pages/Product'
import Footer from './Pages/Footer'
// import Appheader from './Appheader'

// import Amazonheader from './Componets/AmazonHeader'
// import Childcomp from './Componets/Childcomp'
// import Usestates from './Componets/Usestates'
// import Todolist from './Componets/Todolist'

export const Apicontext = createContext()

function App() {
  
  const name = "Raja"
  const age = 26
  const arrval = ["bala", "kumar", "ravi", "guna", "sathish"]
  const students = [
    {
      "id": 1,
      "name": "Kumar",
      "city": "Chennai"
    },
    {
      "id": 2,
      "name": "Sakthi",
      "city": "Selam"
    },
    {
      "id": 3,
      "name": "Balan",
      "city": "Vellor"
    }
  ]

  const [apiData,setApiData] = useState([]);
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((res)=>{
   console.log(res.data);
   setApiData(res.data) 
  })
},[])


 

  return (
    <div>     
    {/* <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
      </thead>
      <tbody>
    {
      apiData.map((res,i)=>{
        return(
          <tr key={i}>
            <td>{res.id}</td>
            <td>{res.title}</td>
            <td>{res.body}</td>
          </tr>
        )
      })
     }
      </tbody>
    </table> */}

    <Apicontext.Provider  value={{name,age,arrval,students,apiData}}>
      <Home />
      <Contact />
      <About />
      <Courses />
      <Product />


    </Apicontext.Provider>

    </div>
  )
}

export default App

