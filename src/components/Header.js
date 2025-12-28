import { signOut } from "firebase/auth";
import { auth } from "../util/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../util/userSlice";
import { LOGO,LOGOUTIMG } from "../util/constant";
const Header = () => {
    const dispatch = useDispatch()
  const navigate =useNavigate()
  const user=useSelector((store)=>store.user)
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
       navigate("/")
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
   return ()=>{
      unsubscribe()
    }
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-48"
        alt="Image not fount"
        src={LOGO}
      />
      {user && <div className="flex p-2">
        <img
          className="w-12 h-12 "
          alt="usericon"
          src={LOGOUTIMG}
        />
        <button className="font-bold text-white" onClick={handleSignOut}>
          (Sign Out)
        </button>
      </div>}
    </div>
  );
};
export default Header;
