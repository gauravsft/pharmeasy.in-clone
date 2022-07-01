import React from "react";




const  ShopByCate = () =>{
   const [data, setData] = React.useState ([])
  

 const getData = async () => {
        try {
          let res = await fetch(` http://localhost:8080/shopByCategory`);
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
        <div  >
          <img src = {product.img} alt="" />
          <h3>{product.head}</h3>
          <p>{product.ptag}</p>
        </div>
      ))}
    </div>
        </div>
      );
    
}

export default  ShopByCate;