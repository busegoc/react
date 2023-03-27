import { useState } from "react";
import "./InputExample.css"
import React from 'react'

function InputExample() {
    const [name,setName] = useState("Buse")

    const onChangeName = (event)=>{
        setName(event.target.value)
    }
  return (
    <div className="input">
      please enter a name:  <br></br>
      <input value={name} onChange={onChangeName}></input>
      
    </div>
  )
}

export default InputExample
