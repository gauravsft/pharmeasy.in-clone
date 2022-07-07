import './App.css';
import {Health} from './component/health';
import { Routes, Route } from "react-router-dom";
import { HealthProductTwo } from "./component/HealthProductTwo";
import { HealthProductDetails } from "./component/healthProductDetails";
import { CartData } from './component/cart';
import { Footer } from "../src/component/footer/footer";
import Navbar from "../src/component/Homepage/Navbar"
import BelowNav from "../src/component/Homepage/BelowNav";
import { Home } from "../src/component/Home";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/healthProduct' element={<Health/>}></Route>
        <Route path='/healthProduct/:productType' element={<HealthProductTwo/>}></Route>
        <Route path='/healthProduct/:productType/:productId' element={<HealthProductDetails/>}></Route>
        <Route path='/cart/:productId' element={<CartData/>}></Route>
      </Routes>
      <BelowNav></BelowNav>
      <Footer></Footer>
      
    </div>
  );
   
}

export default App;
