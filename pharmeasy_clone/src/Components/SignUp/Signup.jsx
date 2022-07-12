import React, { Component, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import firebase from "../../firebase";
//import axios  from "axios";

export class Signup extends Component{
    handleClick=()=>{
        let recaptcha= new firebase.auth.RecaptchaVerifier('recaptcha');
        let number="+919850472567";
        firebase.auth.signInWithPhoneNumber()

    }

}

// const Signup= ()=> {
//      const [email, setEmail]=React.useState("");
//      const [password, setPassword]=React.useState("");
//     const register= async ()=>{
//            try{
//                  const user = await createUserWithEmailAndPassword(
//                     auth,
//                     email,
//                     password
//                  );
//                  console.log(user)
//            }
//            catch(error){
//             console.log("error")
//            }
//     }

//     const [user, setuser]=useState({});
//     onAuthStateChanged(auth,(currentUser)=>{
//         setuser(currentUser)
//     })

//    const logout = async ()=>{
//       await signOut(auth);
//    }
//     return (
//       <>
//       <div style={{display:"block",margin:"auto"}}> 
//         <label htmlFor="Enter Mail ID"></label>
//         <input type="mail"
//         placeholder="Email..."
//         onChange={(event)=>{
//             setEmail(event.target.value)
//         }}></input>
//         </div>
//         <div> 
//         <label htmlFor="Set Password"></label>
//         <input type="password"
//         placeholder="Password..."
//         onChange={(event)=>{
//             setPassword(event.target.value)
//         }}></input>
//         </div>
//         <button onClick={register}>Signup</button>
//         <h1>{user?.email}</h1>
//         <button onClick={logout}>Signout</button>
     
//       </>
//     );
// }
// export default Signup;