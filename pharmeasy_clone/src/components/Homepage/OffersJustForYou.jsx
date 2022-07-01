import React from "react";
import "./components/Homepage/Landing_page/navbar.css";
import { useState, useEffect } from "react";


const  OffersJustForYou = (sliderData) =>{
   const [data, setData] = React.useState ([])
  

 const getData = async () => {
        try {
          let res = await fetch(` http://localhost:8080/offersJustForYou`);
          let sliderData = await res.json();
          setData(sliderData);
        } catch (err) {
          console.log(err);
        }   
      };
      getData();

    return (
        <div className=" offersJustForYou ">
           
         <div style = {{display:"flex"}}>
      {data.map((product) => (
        <div  style = {{display:"flex"}}>
          <img src = {product.img} alt="Image" style = {{height:"80px", width:"80px"}}/>
          <p>{product.pTag}</p>
        </div>
      ))}
    </div>
        </div>
      );
    
}

export default  OffersJustForYou ;
