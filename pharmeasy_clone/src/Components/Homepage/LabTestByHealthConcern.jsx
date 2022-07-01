import React from "react";


const LabTestByHealthConcern = () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/labTestByHealthConcern");
      let res= await data.json();
      setData(res)
      console.log(res)
        }
        catch(err){
            console.lohg(err)
        }
      

    }
    React.useEffect(()=>{
        getData();
    },[])
    
 console.log(data)

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
  
  export default LabTestByHealthConcern;