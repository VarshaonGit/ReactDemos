import React from 'react'
import myfile from './myfile.json'


export default function MyComponent() {
    const totent=myfile.length
    window.addEventListener("load",()=>console.log("loaded",totent))
    const show=()=>{
        console.log("entries",totent)
    }
  return (
    <div>
        <h1>{totent}</h1>
      <button onClick={()=>show()}>click </button>
    </div>
  )
}
