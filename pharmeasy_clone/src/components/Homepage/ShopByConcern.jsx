import React from "react";




const  ShopByConcern = () =>{

    
   const [data, setData] = React.useState ([])
  

 const getData = async () => {
        try {
          let res = await fetch(` http://localhost:8080/shopByCencern`);
          let sliderData = await res.json();
          setData(sliderData);
        } catch (err) {
          console.log(err);
        }   
      };
      getData();

      
    
    return (
        <div  className="shopByconcern" > 
       
        
      {data.map((product) => (
        <div >
          <img src = {product.img} alt=""/>
          <h3>{product.heading}</h3>
        </div>
      ))}
   
  
        </div>
        
      );
    
}

export default ShopByConcern;

