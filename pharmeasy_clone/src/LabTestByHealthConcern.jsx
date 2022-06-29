import React from "react";
import { useState, useEffect } from "react";


const  LabTestByHealthConcern = (sliderData) =>{
   const [data, setData] = React.useState ([])
  

 const getData = async () => {
        try {
          let res = await fetch(` http://localhost:8080/labTestByHealthConcern`);
          let sliderData = await res.json();
          setData(sliderData);
        } catch (err) {
          console.log(err);
        }   
      };
      getData();

    return (
        <div>
           
         <div style = {{display:"flex"}}>
      {data.map((product) => (
        <div style = {{border:"1px solid #cecece", marginRight:"1rem",padding:"0.8rem",marginBottom:"1rem"}}  >
          <img src = {product.img}/>
          <h3>{product.heading}</h3>
          <p>{product.ptag}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
        </div>
      );
    
}

export default LabTestByHealthConcern;