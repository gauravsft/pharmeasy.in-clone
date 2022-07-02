import React from "react";


const LabTestByHealthConcern = () => {

    const [data, setData]=React.useState([]);

    const getData  = async ()=>{
        try{
        let data= await fetch("http://localhost:8080/labTestByHealthConcern");
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
  
      <div style={{display:"flex",gap:"20px"}} >
           {
      data.map((product)=> (
      
      <div >
        <img  style={{height:"150px", width:"150px",borderRadius:"10px"}} src={product.img} alt="" />
        

      </div>
      )) } 
      </div>
    )
  };
  
  export default LabTestByHealthConcern;