import React from "react";




const  Sliderdata = () =>{
   const [data, setData] = React.useState ([])
  

 const getData = async () => {
        try {
          let res = await fetch(` http://localhost:8080/sliderdata`);
          let sliderData = await res.json();
          setData(sliderData);
        } catch (err) {
          console.log(err);
        }   
      };
      getData();

    return (
        <>
     <div style = {{display:"flex"}}>

        {data.map((product) => (
        <div style = {{border:"1px solid #cecece", marginRight:"1rem",padding:"0.8rem",marginBottom:"1rem"}}  >
          <img src = {product.img} alt=""/>
          <h3>{product.head}</h3>
          <p>{product.ptag}</p>
        </div>
      ))}

    </div>
       </>
      );
    
}

export default Sliderdata;