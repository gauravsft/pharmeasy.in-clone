import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataProduct } from "../Redux/healthAction";
import { Link } from "react-router-dom";
import './styles/HealthProductTwo.css';



export const HealthProductTwo = () => {
    const product = useSelector((state) => state.HealthProductList.products)
    const { productType } = useParams();
    const dispatch = useDispatch();

    console.log(product)

    const fetchProduct = async () => {
        try {
            let res = await fetch(`http://localhost:7000/${productType}`);
            let data = await res.json();

            dispatch(getDataProduct(data));
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
        <div className="hp2"  >
            {
                product.map((product) => (
                    <Link to={`/healthProduct/covidEssentials/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                        <div key={product.id} className="hp22">
                            <img src={product.image} alt="" />
                            <h3>{product.title}</h3>
                            <p >MRP <span style={{textDecoration:"line-through"}}>₹{product.priceP}</span></p>
                            <h3>₹{product.priceN}</h3>
                        </div>
                    </Link>

                ))
            }
        </div>
            
        </>
    );
}




