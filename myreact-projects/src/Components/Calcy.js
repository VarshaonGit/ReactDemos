import React from 'react'

export default function Calcy() {

  const  add=()=>alert("Adding numbers...")
  const  sub=()=>alert("Subtracting numbers...")
  return (
    <div>
      <button onClick={add}>+</button>
      <br />
      <button onClick={sub}>-</button>
    </div>
  )
}
