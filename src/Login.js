import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState, useHistory } from "react";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //some facy firebase login..

    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
        window.location.href='/'
    })
    .catch(error=>alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();

    //fancy firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //done with register

        if (auth) {
          window.location.href = "/";
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            vlaue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <p></p>
          <p>
            By signing-in you agree to Amazon's conditions Of use & sale. Please
            see our privacy Notice, our cookies notice and our interest-based
            ads{" "}
          </p>
          <br />
          <button onClick={register} className="login__registerButton">
            Create you Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
