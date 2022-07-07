import { useSelector } from "react-redux";
import './styles/healthProduct.css';
import { Link } from "react-router-dom";



export const HelthProductList = () => {
    const data = useSelector((state) => state.healthProduct.productType)
    console.log(data);


    return (
        <><div className="hp1"  >
            {
                data.map((product) => (
                    <Link to={`/healthProduct/${product.type}`} style={{textDecoration:"none",color:"black"}}>
                        <div key={product.id} className="hp11">
                            <img src={product.image} alt="" />
                            <p>{product.title}</p>
                            <p>{product.offers}</p>
                        </div>
                    </Link>

                ))
            }
        </div>
        </>
    );

}






