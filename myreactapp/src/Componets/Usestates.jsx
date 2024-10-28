import React from 'react'
import { useState } from 'react'

function Usestates() {

    const[name, setName] = useState("Raja")

    const changemyname =()=> {
        setName("my name changed to Kumar")
    }
    
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={changemyname}>change name</button>
    </div>
  )
}

export default Usestates