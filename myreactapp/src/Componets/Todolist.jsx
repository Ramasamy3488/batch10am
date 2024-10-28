import React, {useState} from 'react'
import '../App.css'

function Todolist() {
    const [arrayData, setArrayData] = useState([])
    const [list, setList] = useState("") 
    
    const getvalue = (e) =>{
        setList(e.target.value)
    }

    const addlistvalue =()=>{
        const newTaskList = {
            id: arrayData.length === 0 ? 1 : arrayData[arrayData.length-1].id+1,
            mytask : list
        }

        setArrayData([...arrayData,newTaskList])
        setList("")
    } 
    
   
    
  return (
    <div>
        <input type="text" onChange={getvalue} value={list}/>
        <button onClick={addlistvalue}>Add List</button>

        <div>
            {
               arrayData.map((res)=>{
                return(
                    <ul key={res.id}>
                      
                      <li><span>{res.id}</span> <span>{res.mytask}</span></li>                        
                    </ul>
                )
               }) 
            }
        </div>
    </div>
  )
}

export default Todolist