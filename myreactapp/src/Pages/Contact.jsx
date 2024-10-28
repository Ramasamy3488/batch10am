import React,{useContext} from 'react'
import { Apicontext } from '../App'

function Contact() {
  const mydata = useContext(Apicontext)
  return (
    <div>
      Contact

      <h1>{mydata.name}</h1>
      
      </div>
  )
}

export default Contact