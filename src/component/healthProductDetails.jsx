import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProductDetails } from "../Redux/healthAction";
import { Link } from "react-router-dom";
import './styles/healthProductDetails.css';



export const HealthProductDetails = () => {
    const product = useSelector((state) => state.HealthProductDetails.product)
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        try {
            let res = await fetch(`http://localhost:7000/covidEssentialDetails/${productId}`);
            let data = await res.json();

            dispatch(getDataProductDetails(data));
            console.log(data)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, [dispatch])

    return (
        <>

            <div className="hp3" key={product.id} style={{marginTop:"100px"}}  >

                <div >
                    <img src={product.image} alt="" />
                </div>
                <div>
                    <h3>{product.title}</h3>
                    <p >MRP <span style={{ textDecoration: "line-through" }}>₹{product.priceP}</span></p>
                    <h3>₹{product.priceN}</h3>
                    <p>Delivery by <span style={{fontWeight:"bold"}}>Today, before 10:00 pm</span> </p>

                    <button style={{background: "#10847e",width:"150px",height:"40px",borderRadius:"8px",color:"white",marginLeft:"2%",cursor:"pointer"}}>Add To Cart</button>
                </div>
                <div >
                    <p style={{marginLeft:"8%"}}>Please add item(s) to proceed</p>
                    <Link to={`/cart/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <button style={{width:"250px",height:"40px",backgroundColor:"ActiveBorder",borderRadius:"8px",color:"white",cursor:"pointer",marginLeft:"8%"}}>VIEW CART </button>
                    </Link>
                </div>

            </div>

        </>
    );
}




