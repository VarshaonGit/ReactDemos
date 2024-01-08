import React from 'react'
import { useState } from 'react'
import './App.css';
export default function IncDec() {
    const [Num,setNum]=useState(0)
    const inc=()=>setNum(Num+1)  
    const dec=()=>setNum(Num-1)
  return (
   
    <div className='myApp'>
        <p>  {Num}    </p>
        <button onClick={inc}>+</button>
        
        <button onClick={dec}>-</button><br />

        <button onClick={()=>document.body.style.backgroundColor='red'}>Click to change BGC </button>
    </div>
  )
}
