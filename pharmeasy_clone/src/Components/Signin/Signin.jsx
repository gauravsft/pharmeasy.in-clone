import React from "react";
<<<<<<< Updated upstream
import {  signInWithEmailAndPassword, } from "firebase/auth";
import {auth} from "../../firebase"
=======
import {  signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebase"
import { useState } from "react";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

=======
 const [user, setuser]=useState({});
 onAuthStateChanged(auth,(currentUser)=>{
     setuser(currentUser)
 })
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
     
=======
    <h1>{user?.email}</h1>
>>>>>>> Stashed changes
      </>
    );
}
export default Signin;