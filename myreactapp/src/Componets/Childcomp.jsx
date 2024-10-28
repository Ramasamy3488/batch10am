import React from 'react'

function Childcomp({name,age,arrval,students}) {
  return (
    <div>
         <h1>My name is {name} and i am {age} years old.</h1>
      <div>
        {
          arrval.map((res, i) => {
            return (
              <ul key={i}>
                <li>{res}</li>
              </ul>
            )
          })
        }
      </div>

      <div className='flex'>
        {
          students.map((res) => {
            return (
              <div key={res.id}>
                <h2>{res.id}</h2>
                <h3>{res.name}</h3>
                <h3>{res.city}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Childcomp