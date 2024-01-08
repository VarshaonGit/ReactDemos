import axios from 'axios';
import React, { useState } from 'react'

export default function PostDemo() {
    const [myData,setMyData]=useState();
    const addStudent=async ()=>
    {
        setMyData({
            "Name":"Seeta",
            "Address":"Bangalore"
        })
        const resp=await axios.post("http://localhost:3000/Student",myData);
        console.log(resp)
    }
  return (
    <div>
      <button onClick={()=>addStudent()}>Click to Add Student</button>
    </div>
  )
}
