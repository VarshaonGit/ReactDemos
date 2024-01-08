import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
export default function MyNav(props) {
  const [id,setId]=useState(0)
  useEffect(()=>{
    console.log("id",props.id)
   
    setId(props.id)
  },[id])
 
  return (
    
    <div>
         {/* <a href="/">home</a>
        <br />
        <a href="a1">Axios 1</a>  */}

      <ul>
          <li>
            <Link to="/a1/:id">Axios Demo 1</Link>
          </li>
          <li>  
            <Link to="/page/:id">Blog Post</Link>
          </li>
          <li>
          <Link to="/a2">Axios Demo 2</Link>
          </li>
          <li>
          <Link to="/">Home</Link>
          </li>
      </ul>
    </div>
  )
}
