import React from "react";
import "./CSS_Components/home.css"




const FrequentlyBookedLabtests = () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/frequentlyBookedLabtests");
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
  
      <div style={{display:"flex",gap:"20px",width:"98%",margin:"auto" }} >
           {
      data.map((product)=> (
      
      <div className="frequentlyBookedLabtests_card">
        <div style={{width:"80px",height:"30px",borderRadius:"4px", backgroundColor:"#F47779",color:"white",textAlign:"center"}}>
        <p style={{marginBottom:"-10px",fontFamily:"sans-serif",lineHeight:"16px",fontWeight:"500",verticalAlign:"center"}}>{product.offer}</p>
         </div>
         <h3 style={{fontFamily:"sans-serif",color:"black", letterSpacing:"0.6px"}}>{product.heading}</h3> 
         <p style={{fontFamily:"sans-serif",color:"#30363C",fontSize:"16px"}}>{product.ptag}</p>
         
            <div  style={{display:"flex",justifyContent:"space-between"}}>
             <div>
        <h3  style={{fontFamily:"sans-serif",color:"#6c6e6f",textDecoration:"line-through"}}>{product.mrpPrice}</h3>
         <h3  style={{fontFamily:"sans-serif",color:"black"}}>{product.actualPrice}</h3>
         </div>  
          <img style={{width:"80px", height:"80px"}} src={product.img} alt="" />

            </div>

      </div>
      )) } 
      </div>
    )
  };
  
  export default FrequentlyBookedLabtests;

  // "img":"https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/9fc5a0ab225a3ca2bc1702149e07f311.png?dim=256x0",
//   "heading":"Comprehensive Full Body Checkup with Vitamin D",
//   "ptag":"Measures Vitamin D & B12 levels and other essential parameters",
//   "mrpPrice":"₹4199",
//   "actualPrice":"₹1499",
//   "offer":"64% OFF"