import React from "react";
import "./CSS_Components/home.css"


const TrendingNearYou = () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/trendingNearYou");
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
      
      <div className="newLaunched_card">
          <img style={{width:"80px", height:"80px"}} src={product.img} alt="" />
         <h3>{product.heading}</h3> 
         <p>{product.pTag}</p>
         <p>{product.mrpPrice}</p>
            <div  style={{display:"flex",justifyContent:"space-between"}}>
            <p>{product.actualPrice}</p>
            <p style={{color:"#F47779" }}>{product.offer}</p>
         
         </div>  
      </div>
      )) } 
      </div>
    )
  };
  
  export default TrendingNearYou ;

//   "img":"https://cdn01.pharmeasy.in/dam/products_otc/I32680/accu-chek-instant-glucometer-test-strips-box-of-50-1-1654166925.jpg?dim=320x320&dpr=1&q=100",
//   "heading":"Accu-Chek Instant Glucometer Test Strips Box Of 50",
//   "mrpTag":"MRP",
//   "mrpPrice":"₹975",
//   "actualPrice":"₹926.25",
//   "offer":"5% OFF"
