import React from "react";
import {  signInWithEmailAndPassword, } from "firebase/auth";
import {auth} from "../../firebase"
//import axios  from "axios";

const Signin= ()=> {
    const [loginemail, setLoginEmail]=React.useState("");
    const [loginpassword, setLoginPassword]=React.useState("");
    const login= async ()=>{
        try{
              const user = await signInWithEmailAndPassword(
                 auth,
                 loginemail,
                 loginpassword
              );
              console.log(user)
        }
        catch(error){
         console.log("error")
        }
 }


    return (
      <>
      <div> 
        <label htmlFor="Enter Mail ID"></label>
        <input type="mail"
        placeholder="Email..."
        onChange={(event)=>{
            setLoginEmail(event.target.value)
        }}
        ></input>
        </div>
        <div> 
        <label htmlFor="Enter Password"
        placeholder="Password..."
        onChange={(event)=>{
            setLoginPassword(event.target.value)
        }}></label>
        <input type="password"></input>
        </div>
    <button onClick={login}>Login</button>
     
      </>
    );
}
export default Signin;