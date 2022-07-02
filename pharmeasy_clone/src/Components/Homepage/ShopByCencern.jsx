import React from "react";


const ShopByCencern = () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/shopByCencern");
      let res= await data.json();
      setData(res)
   
        }
        catch(err){
            console.lohg(err)
        }
      

    }
    React.useEffect(()=>{
        getData();
    },[])
    


    return (
  
      <div style={{display:"grid",gap:"20px",gridTemplateColumns:"repeat(7, 1fr)",width:"98%",margin:"auto" }} >
           {
      data.map((product)=> (
      
      <div className="shopByCencern_card">
        <img style={{height:"130px", width:"130px",margin:"auto"}} src={product.img} alt="" />
        <h3 s>{product.heading}</h3>
   

      </div>
      )) } 
      </div>
    )
  };
  
  export default ShopByCencern;