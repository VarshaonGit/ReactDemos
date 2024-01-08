import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const AxiosDemo2 = () => {
  const [myData, setMyData] = useState([]);
  const [vi, setvi] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyCRnELYVdVQFJIVHDfXZg2n1eKUjc9jG_8")
      .then((response) =>{
      setMyData(response.data.items)
      setvi(response.data.items.volumeInfo)
      }
      )
      .catch((error) => setIsError(error.message));
  }, []);
 console.log("My data salesinfo",myData);
 console.log("My data viinfo",vi);
 return (
  <>
    <h1>Axios Tutorial ...</h1>
    {isError !== "" && <h2>{isError}</h2>}

    <div className="grid">
      {
      myData.map((item) => {
          console.log("volume info",item.volumeInfo.publishedDate);
           
        return (
          <div  className="card border">
              <br />
            <a href={item.selfLink}>clcik</a> 
            <p>{item.volumeInfo.publishedDate}</p>
            <img src={item.volumeInfo.imageLinks.thumbnail} style={{width:"200px",height:"200px"}}/>
            {/* { <table>{
            item.saleInfo.map((child)=>
            <tr>
                   
                  <td>{child.country}</td>
            </tr>
            )
            }</table> } */}
            
          </div>
        );
      })}
    </div>
  </>
);
};

export default AxiosDemo2;