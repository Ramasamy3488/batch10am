import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Update() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [city,setCity] = useState("")
  const [phone,setPhone] = useState("")
  const [role,setRole] = useState("")
  const [id,setId] = useState("")
  const [msg,setMsg]=useState("")
  const redirect = useNavigate();

  useEffect(()=>{
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
    setPhone(localStorage.getItem("phone"))
    setCity(localStorage.getItem("city"))
    setRole(localStorage.getItem("role"))
},[])

const updateFormData = async(e)=>{
  e.preventDefault();
  await axios.put(`https://67171f523fcb11b265d487af.mockapi.io/employees/${id}`,{name,email,phone,role,city})
  .then((r)=>{
     console.log("user Updated successfully");
     setMsg("Data Updated successfully")    
     setTimeout(()=>{
       redirect("/userlist")
     },2000)
    
  })
  .catch((err)=>{
     console.log(err);
  })

}
  return (
    <div className='container'>
      <h1>Registration</h1>
      <form onSubmit={updateFormData}>
        <input type="text" placeholder='Please enter your name' className='form-control my-3' value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder='Please enter your email' className='form-control my-3' value={email} onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder='Please enter your phone no' className='form-control my-3' value={phone} onChange={e => setPhone(e.target.value)} />
        <input type="text" placeholder='Please enter your role' className='form-control my-3' value={role} onChange={e => setRole(e.target.value)} />
        <input type="text" placeholder='Please enter your city' className='form-control my-3' value={city} onChange={e => setCity(e.target.value)} />
        <button type="submit" className='btn btn-primary'>UPDATE</button>
      </form>
      <h3>{msg}</h3>
    </div>
  )
}

export default Update