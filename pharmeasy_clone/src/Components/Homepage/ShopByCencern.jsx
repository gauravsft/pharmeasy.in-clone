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
  
      <div style={{display:"flex",gap:"20px" }} >
           {
      data.map((product)=> (
      
      <div className="shopByCencern_card">
        <img style={{height:"100px", width:"100px"}} src={product.img} alt="" />
        <h3 style={{fontFamily:"sans-serif",lineHeight:"24px",color:"#30363C"}}>{product.heading}</h3>
   

      </div>
      )) } 
      </div>
    )
  };
  
  export default ShopByCencern;