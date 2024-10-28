import React,{useContext} from 'react'
import { Apicontext } from '../App'

function About() {
  const mydata = useContext(Apicontext)
  return (
    <div>
      <h1>This is from About child componentes</h1>
      <h1>{mydata.name}</h1>
      <h1>{mydata.age}</h1>
      <h1>
        {
        mydata.arrval.map((res,i)=>{
          return(
            <ul key={i}>
              <li>{res}</li>
            </ul>
          )
        })
        }
        </h1>
        <div>
          {
            mydata.students.map((res)=>{
              return(
                <div key={res.id}>
                  <h1>{res.id}</h1>
                  <h1>{res.name}</h1>
                  <h1>{res.city}</h1>

                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default About