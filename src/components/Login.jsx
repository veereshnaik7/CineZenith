import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { TbPasswordUser } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { success } from "../reduxToolkit/cineZenithSlice";

const Login = () => {
  
  const [username, setusername] = useState(
    localStorage.getItem("username") ?? "username"
  );
  const [password, setpassword] = useState("password");
  const [showpass, setshowpass] = useState("password");
  const [err, seterr] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  var flag = true;
  const handleShowPass = () => {
    flag ? setshowpass("text") : setshowpass("password");
    flag = !flag;
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (username === "username" && password === "password") {
      localStorage.setItem("username", username);
      dispatch(success());
      navigate("/");
      seterr("");
    } else {
      setusername("");
      setpassword("");
      seterr("credintilas are not matched");
    }
  };
  return (
    <form className="login-form">
      <h1>login</h1>
      <div className="input-ligin-div">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          value={username}
          onChange={(event) => {
            setusername(event.target.value);
          }}
        />
        <label htmlFor="username">
          <FiUser className="login-react-icons" />
        </label>
      </div>
      <div className="input-ligin-div">
        <input
          type={showpass}
          name="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => {
            setpassword(event.target.value);
          }}
          autoComplete="on"
        />
        <label htmlFor="password">
          <TbPasswordUser
            onClick={handleShowPass}
            className="login-react-icons"
          />
        </label>
      </div>
      <div className="login_btn" >
        <div> 
          <button class="authbtn" type="submit" onClick={handleLoginSubmit}>
            <div class="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>

            <div class="text">Login</div>
          </button>

          <label htmlFor="login"></label>
        </div>
      </div>
      <p className="text-danger  cred-p">{err}</p>
      <p className="text-success cred-p ">
        Note: credentials are "username" and "password"{" "}
      </p>
    </form>
  );
};

export default Login;
