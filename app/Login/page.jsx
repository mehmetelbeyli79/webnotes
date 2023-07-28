import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
function Login() {
  return (
    <div>
      <button className="btn btn-block btn-error shadow-lg">
        <AiFillGoogleCircle className="text-white text-4xl" /> Google İle Bağlan
      </button>
    </div>
  );
}

export default Login;
