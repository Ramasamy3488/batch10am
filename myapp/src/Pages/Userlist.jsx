import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Userlist() {  
  const [apiData, setApiData] = useState([]);
  const[msg,setMsg]=useState("")
  const redirect = useNavigate()

  const apiCollect = () => {
    axios.get("https://67171f523fcb11b265d487af.mockapi.io/employees")
      .then((res) => {
        console.log(res);
        setApiData(res.data)
        setMsg("")
      }).catch((err) => {
        console.log(err);
        setMsg("Error occured!!!")
      })
  }
  useEffect(() => {
    apiCollect();
  }, [])

  const deleteData=(id)=>{
    axios.delete(`https://67171f523fcb11b265d487af.mockapi.io/employees/${id}`)
    .then((res)=>{
      console.log("Data deleted successfully!!!");
      apiCollect();      
    }).catch((err)=>{
      console.log(err);      
    })
  }

  const updateData = ({id,name,email,phone,role,city})=>{
        redirect('/update')
        localStorage.setItem("id",id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("phone", phone)
        localStorage.setItem("role", role)
        localStorage.setItem("city", city)
  }

  return (
    <>
    <div className="App">
    <h1>USER LIST</h1>
    <div className='mycontainer'>      
      {
        apiData.map((res) => {
          return (
            <div key={res.id}>
              <h5>ID: {res.id}</h5>
              <h5>{res.createdAt}</h5>
              <h5>NAME: {res.name}</h5>
              <h5>Email: {res.email}</h5>
              <h5>Phone No: {res.phone}</h5>
              <h5>Role: {res.role}</h5>
              <h5>City: {res.city}</h5>
              <button className='btn btn-danger' onClick={(e)=>deleteData(res.id)}>DELETE</button>
              <button className='btn btn-info' onClick={(e)=>updateData(res)}>UPDATE</button>
            </div>
          )

        })
      }      
    </div>
    </div>
    
    <h3>{msg}</h3>
    </>
  )
}

export default Userlist