import axios from 'axios'
import React, { useEffect } from 'react'

export default function AxiosPost() {
    const myData={
        "id": 15,
        "Name": "some comment5",
        "Address": 5
      }
    const putData=async()=>{
       const resp= await axios.post('http://localhost:3000/student',myData)
       console.log(resp)
    }
    
  return (
    <div>
      <button onClick={()=>putData()}>click to add data </button>
    </div>
  )
}
