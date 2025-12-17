import { useState } from "react";
import Header from "./Header";

const Login=()=>{

  const[isSignInForm, setisSignInForm]=useState(true);


  const toggleSignInForm=()=>{
     setisSignInForm(!isSignInForm);
  }
  return(

    <div>
      <Header/>

      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg" alt="logo"/>
      </div>

      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl">{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700"/>)}
          <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700"/>
          <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"/>
          <button className=" p-2 my-4 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
          <p className= "text-white py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign up Now.":"Already registered? Sign in Now."}</p>

      </form>
    
      
    </div>
  )
}

export default Login;