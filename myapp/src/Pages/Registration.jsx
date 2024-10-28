import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Registration() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [city, setCity] = useState("")
  const [msg, setMsg] = useState("")
  const redirect = useNavigate()

  const addFormData = async (e) => {
    e.preventDefault();
    const formDatas = { name, email, phone, role, city }
    if (name.length > 1 && email.length > 1 && phone.length > 1 && role.length > 1 && city.length > 1) {
      await axios.post("https://67171f523fcb11b265d487af.mockapi.io/employees", formDatas)
        .then((res) => {
          console.log(res, "Data Submitted...");
          setMsg("Form submitted..successfully")

          setTimeout(() => {
            redirect("/userlist")
          }, 2000)
        }).catch((err) => {
          console.log(err);
          setMsg(err);
        })
    }

  }

  return (
    <div className='container'>
      <h1>Registration</h1>
      <form onSubmit={addFormData}>
        <input type="text" placeholder='Please enter your name' className='form-control my-3' onChange={e => setName(e.target.value)} />
        <input type="text" placeholder='Please enter your email' className='form-control my-3' onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder='Please enter your phone no' className='form-control my-3' onChange={e => setPhone(e.target.value)} />
        <input type="text" placeholder='Please enter your role' className='form-control my-3' onChange={e => setRole(e.target.value)} />
        <input type="text" placeholder='Please enter your city' className='form-control my-3' onChange={e => setCity(e.target.value)} />
        <button type="submit" className='btn btn-success'>Submit</button>
      </form>
      <h3>{msg}</h3>
    </div>
  )
}

export default Registration