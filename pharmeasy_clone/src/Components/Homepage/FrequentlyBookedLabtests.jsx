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
  
      <div style={{display:"flex",gap:"20px" }} >
           {
      data.map((product)=> (
      
      <div className="frequentlyBookedLabtests_card">
        <p>{product.offer}</p>
         <h3>{product.heading}</h3> 
         <p>{product.ptag}</p>
         
            <div  style={{display:"flex",justifyContent:"space-between"}}>
             <div>
        <p>{product.mrpPrice}</p>
         <p>{product.actualPrice}</p>
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