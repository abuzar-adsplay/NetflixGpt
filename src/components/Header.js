import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log(user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchclick = ()=>{
    // Toggle Gpt Search
    dispatch(toggleGptSearchView());
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-t from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex p-2">
          <button className="py-2 px-4 mx-4 my-2 bg-purple-600" onClick={handleGptSearchclick}>
            GPT Search
          </button>
          <img className="w-12 h-12" src={user.photoURL} alt="icon" />
          <button onClick={handleSignout}>(signout)</button>
        </div>
      )}
    </div>
  );
};

export default Header;
