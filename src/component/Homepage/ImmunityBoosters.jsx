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
  
      <div style={{display:"grid",gap:"30px",gridTemplateColumns:"repeat(3, 1fr)",width:"98%",margin:"auto",marginLeft:"5px"}} >
           {
      data.map((product)=> (
      
      <div className="immunityBooster_card">
          <img style={{width:"130px", height:"130px",padding:"10px",}} src={product.img} alt="" />
          <div >
          <h4 style={{fontFamily:"sans-serif",color:"black", letterSpacing:"0.6px"}}>{product.heading}</h4> 
          <div style={{display:"flex",gap:"5px",marginTop:"-30px"}}>
          <h4 style={{fontFamily:"sans-serif",color:"#6c6e6f",textDecoration:"line-through"}}>{product.mrpTag}</h4>
          <h4  style={{fontFamily:"sans-serif",color:"#6c6e6f",textDecoration:"line-through"}}>{product.mrpPrice}</h4>
         </div>
         <div  style={{display:"flex",justifyContent:"space-between",marginTop:"-36px"}}>
         <h4  style={{fontFamily:"sans-serif",color:"black"}}>{product.actualPrice}</h4>
         <h4 style={{color:"#F47779",fontFamily:"sans-serif" }}>{product.offer}</h4>   
    </div>
     </div>
      </div>
      )) } 
      </div>
    )
  };
  
  export default ImmunityBoosters ;

