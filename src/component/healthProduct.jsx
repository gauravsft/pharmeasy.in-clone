import {  useDispatch } from 'react-redux';
import { getData } from "../Redux/healthAction";
import { HelthProductList } from './healthProductList';
import React from 'react';


export const HealthProduct = () => {
    const dispatch = useDispatch();
    const FetchData = async () => {
        try {
            let res = await fetch(`http://localhost:7000/firstPageProduct`);
            let data = await res.json();
            
            dispatch(getData(data));
            console.log(data)
        }
        catch (error) {
            console.log(error);
        }
    };
    FetchData();




    return (
        <>
            <HelthProductList/>
        </>
    );
}
