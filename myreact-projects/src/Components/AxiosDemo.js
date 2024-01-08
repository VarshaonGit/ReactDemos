import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AxiosDemo() {
const[myData,setMydata]=useState() 
const[desc,setDesc]=useState()
const  getData=async()=>
{
    let x="quilting"
    const resp=await axios.get("https://www.googleapis.com/books/v1/volumes?q="+x)
   // console.log(resp.data.sources)
    setMydata(resp.data.items);   
    
}
    useEffect(()=>{
        getData();  
    },[])
  return (  
    <div>
        <h1>Axios Demo</h1>
        {            
           myData && myData.map((d)=>{
                return(
                    <div key={d.id}>
                         <img src={d.volumeInfo.imageLinks.thumbnail} alt="not available " />
                        <span><b>Title:</b> {d.volumeInfo.title}   </span> 
                        <span><b>No of Pages :</b> {d.volumeInfo.pageCount}</span><br />
                        <span><b>No of Pages :</b> {d.volumeInfo.description.slice(0,25)}</span><br />
                        </div>
                         
                )
            })
        }
    </div>
  )
}
