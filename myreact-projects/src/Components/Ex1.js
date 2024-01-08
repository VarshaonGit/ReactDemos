import React, { useState } from 'react'

export default function Ex1() {
    const[color,setColor]=useState();
    const getColor=(e)=>setColor(e.target.value)
  return (
    <div  > 
      <div id="d1" style={{backgroundColor:'blue',width:'100px',height:'100px'}}>
        
      </div>  
      <input type="text" onChange={getColor}/>
      <br />
        <button onClick={
            ()=>document.getElementById("d1").style.backgroundColor=color
            }>Click to chnage div color
        </button>
    </div>
  )
}
