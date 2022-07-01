import React from "react";



const  FrequentlyBookedLabtests = () =>{
   const [data, setData] = React.useState ([])
  

 const getData = async () => {
        try {
          let res = await fetch(` http://localhost:8080/frequentlyBookedLabtests`);
          let sliderData = await res.json();
          setData(sliderData);
        } catch (err) {
          console.log(err);
        }   
      };
      getData();
      console.log(1)

    return (
        <div>
           
         <div style = {{display:"flex"}}>
      {data.map((product) => (
        <div >
          <img src = {product.img} alt=""/>
          <h3>{product.heading}</h3>
          <p>{product.ptag}</p>
          <p>{product.mrpPrice}</p>
          <p>{product.actualPrice}</p>
          <p>{product.offer}</p>
        </div>
      ))}
    </div>
        </div>
      );
    
}

export default FrequentlyBookedLabtests;