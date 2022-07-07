import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProductDetails } from "../Redux/healthAction";
import { Link } from "react-router-dom";
import './styles/healthProductDetails.css';



export const CartData = () => {
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

            <div className="hp3" key={product.id} style={{marginTop:"100px"}} >

                <div >
                    <img src={product.image} alt="" />
                </div>
                <div>
                    <h3>{product.title}</h3>
                    <p >MRP <span style={{ textDecoration: "line-through" }}>₹{product.priceP}</span></p>
                    <h3>₹{product.priceN}</h3>
                    <p>Delivery by <span style={{ fontWeight: "bold" }}>Today, before 10:00 pm</span> </p>

                </div>

                <div>
                    <Link to={`/Login`} style={{ textDecoration: "none", color: "black" }}>
                        <button style={{ width: "250px", height: "40px", background: "#10847e",fontSize:"17px", borderRadius: "8px", color: "white", cursor: "pointer", marginLeft: "8%" }}>Add Delevry Address </button>
                    </Link>
                    <h4 style={{marginLeft: "8%"}}>Order Summary</h4>

                    <div style={{marginLeft: "8%",display:"flex",justifyContent:"space-between"}}>
                        <span>Cart Value</span>
                        <span style={{marginRight:"110px"}}>₹{product.priceN}</span >
                    </div>

                    <div style={{marginLeft: "8%",marginTop:"15px",display:"flex",justifyContent:"space-between"}}>
                        <span>Amount to be paid</span>
                        <span style={{marginRight:"110px"}}>₹{product.priceN}</span >
                    </div>

                </div>


            </div>

        </>
    );
}




