import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function AxiosDemo_() {
  const { id } =useParams()
const[data,setData]=useState()
  useEffect(()=>{
    getData();
  },[id])
const getData=async ()=>{
  console.log(id)
    const res=await axios.get("http://localhost:3000/Student/"+id);
    setData(res.data)
    console.log(data)
}

  return (
    <div>
     
     {console.log(data)}
      <button onClick={()=>getData()}>click</button>
    </div>
  )
}
