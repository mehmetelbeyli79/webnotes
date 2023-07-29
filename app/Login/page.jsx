import React, { useState, useEffect } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { girisYap, cikisYap } from "../GlobalState/Features/userSlice";
import { useDispatch } from "react-redux";
function Login() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  // Bu useEffect İle Giriş yapıldığı anda user state'imiz güncelleniyor.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
  //console.log(user ? user.displayName : "Giriş Yapılmadı" );
  return (
    <div>
      <button
        onClick={() => dispatch(girisYap(user))}
        className="btn btn-block btn-error shadow-lg"
      >
        <AiFillGoogleCircle className="text-white text-4xl" /> Google İle Bağlan
      </button>
      <button
        onClick={() => dispatch(cikisYap())}
        className="btn btn-block btn-error shadow-lg"
      >
        <AiFillGoogleCircle className="text-white text-4xl" /> Google İle Çıkış
        Yap
      </button>
    </div>
  );
}

export default Login;
