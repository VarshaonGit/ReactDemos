import React from 'react'

export default function ArrayDemo() {
     const names=['Anil','Raju','Aaravi']
     const cars=[
        {name:'A',model:'xyz',price:10},
        {name:'B',model:'xyz',price:20},
        {name:'C',model:'xyz',price:30}
     ];
     cars.map((c)=>console.log(c))
  return (
  
    <div>
      Axio Demo
         {
            cars.map((data)=>
                <h2>Name of Car :{data.name}  <br />
                Model of Car :{data.model} <br/>
                Price of Car :{data.price}</h2>
            )
         }
    </div>
  )
}
