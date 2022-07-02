import React from "react";
import "./CSS_Components/home.css"



const ImmunityBoosters= () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/immunityBoosters");
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
  
      <div style={{display:"grid",gap:"20px",gridTemplateColumns:"repeat(3, 1fr)" }} >
           {
      data.map((product)=> (
      
      <div className="immunityBooster_card">
          <img style={{width:"80px", height:"80px"}} src={product.img} alt="" />
          <div ><h3>{product.heading}</h3> 
         <p>{product.pTag}</p>
         <p>{product.mrpPrice}</p>
            <div  style={{display:"flex",justifyContent:"space-between"}}>
            <p>{product.actualPrice}</p>
            <p style={{color:"#F47779" }}>{product.offer}</p></div>
         </div>  
      </div>
      )) } 
      </div>
    )
  };
  
  export default ImmunityBoosters ;

