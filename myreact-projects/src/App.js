import React from 'react'
import CodeSplitting from './Components/CodeSplitting'

export default function App() {
  return (
    <div>
      <CodeSplitting />
      <img src="./A.JPG" />
    </div>
  )
}



// import React, { useState } from 'react'
// import AxiosDemo2 from './Components/AxiosDemo2'
// import AxiosDemo_ from './Components/AxiosDemo_'
// import { Link, Route, Routes } from 'react-router-dom'
// import MyNav from './Components/MyNav'
// import ErrorPage from './Components/ErrorPage'
// import BlogPost from './Components/BlogPost'
// export default function App() {
//   const [id,setId]=useState()
//   return (
//     <div>
//       App Component
//       <input type="text"  onChange={(e)=>setId(e.target.value)}/>
//       <Routes>
//         <Route path="/a1/:id" element={<AxiosDemo_/>} />
//         <Route path="/" />
//         <Route path="/a2" element={<AxiosDemo2 />} />
//         <Route path="/*" element={<ErrorPage />} />
//         <Route path="/page/:id" element={<BlogPost />} />
//         </Routes>
     
//       <MyNav id={id}/>
//     </div>
//   )
// }


// import React from 'react'
// import AxiosDemo_ from './Components/AxiosDemo_'
// import PostDemo from './Components/PostDemo'
// import AxiosPost from './Components/AxiosPost'

// export default function App() {
//   return (
//     <div>
//       <AxiosDemo_ />
//       <AxiosPost />
//     </div>
//   )
// }












//----------------------------------------------------------------------------------
// import React from 'react'
// import UseEffectDemo from './Components/UseEffectDemo'
// export default function App() {
//   return (
//     <div>
//       <UseEffectDemo />
//     </div>
//   )
// }




//-----------------------------------------------------------------------------------------------------
// import React, { useState } from 'react'
// import LifeCycle from './Components/LifeCycle'

// export default function App() {
//   const[status,setStatus]=useState(true)
//   return (
//     <div>

//       {
//         status 
//         ? <LifeCycle /> 
//         : <h1>No Child to load </h1>
//       }
//       <button 
//       onClick={()=>setStatus(!status)}
//       >Click to toggle</button>
//     </div>
//   )
// }







// -------------------------------------------------------------------------------------
// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import Footer from './Footer';
// import Calcy from './Calcy';
// import { useState } from 'react';
// import IncDec from './IncDec';
// import Ex1 from './Components/Ex1';
// import Ex2 from './Components/Ex2';
// import ClassComponent from './Components/ClassComponent';
// import ArrayDemo from './Components/ArrayDemo';
// import FormHandling from './Components/FormHandling';
// import Child from './Components/Child';
// import Button from 'react-bootstrap/Button';


// function App() {
//   const[data,setdata]=useState();
//   const show=(data)=>{
//     console.log(data)
//     setdata(data)
//   }
//  const show2=()=>{
//   console.log("object")
//     document.getElementById("d").style.height="400px";
//     document.getElementById("d").style.width="400px";
//     document.getElementById("d").style.backgroundColor='yellow';
//  }
//   return (
//     <div>
//       <div id="d"></div>
//       <button onClick={show2}>React Button </button>
//       <Button variant="primary">Primary</Button>
//       <h1>Name in  App : {data}</h1>
//       <Child show={show}/>
//       {/* <FormHandling /> */}
//       {/* <ArrayDemo /> */}
//       {/* <ClassComponent /> */}
//       {/* <Ex1 />
//       <Ex2/> */}
//      {/* <Header />
//      <IncDec />
     
//      <h2>This is App Component </h2>
//      <h3>Data is : {data}</h3>
//       <button onClick={()=>show(100)}>Click Here </button> 
//      <Footer  /> */}
//     </div>
//   );
// }

// export default App;
