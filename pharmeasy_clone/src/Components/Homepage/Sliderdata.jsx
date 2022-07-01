import React from "react";
import  ReactDOM  from "react-dom";

const Sliderdata = () => {
    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/sliderdata");
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
  
      <div style={{display:"flex" }} >
           {
      data.map((product)=> (
      
      <div >
        <img src={product.img} alt="" />
        <h3>{product.head}</h3>
        <p>{product.pTag}</p>

      </div>
      )) } 
      </div>
    )
  };
  
  export default Sliderdata;