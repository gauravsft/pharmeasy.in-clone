import React from "react";
import "./CSS_Components/home.css"


const NewLaunches = () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/newLanches");
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
         <p>{product.ptag}</p>
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
  
  export default NewLaunches;

//   "img":"https://cdn01.pharmeasy.in/dam/products_otc/L52684/yardley-london-english-blossom-anti-perspirant-deodorant-roll-on-for-women-50-ml-2-1641793651.jpg?dim=1440x0",
//             "heading":"Yardley London English Blossom Anti Perspirant Deodorant Roll On For Women - 50 Ml",
//             "mrpTag":"MRP",
//             "mrpPrice":"₹199",
//             "actualPrice":"₹167.16",
//             "offer":"16% OFF"
