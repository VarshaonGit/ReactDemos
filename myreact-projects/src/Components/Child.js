import React from 'react'

export default function Child(props) {
    let name="varsha"
  return (
    <div>
        
      <h1>Name in Child {name}</h1>
      <button onClick={()=>props.show(name)}>Click to send data to App</button>
    </div>
  )
}
