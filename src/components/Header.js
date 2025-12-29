import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from "../utils/constants";

const Header=()=>{

  const dispatch=useDispatch();

  const navigate=useNavigate();
  const user=useSelector((store) =>store.user);
const handleSignOut=()=>{
  signOut(auth).then(() => {
    navigate("/");
  
}).catch((error) => {
  navigate("/error");
  
});
}

 useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid,email,displayname} = user;
    dispatch(addUser({
      uid:uid,
      email:email,
      displayname:displayname
    })
  );
   navigate("/browse")
  } else {
    dispatch(removeUser());
  }
});

  },[])

  return(
    <div className= "absolute px-12 w-screen py-3 bg-gradient-to-b from from-black z-10 flex justify-between">
      <img className="w-56" src={logo}  alt="logo" />

    {user && <div className="p-2">
      <img alt="userIcon"/>
      <button  onClick={handleSignOut}className="font-bold text-white">Sign Out</button>
    </div>}
    </div>
    

    
  )
}

export default Header;