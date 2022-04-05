import React, { useState } from "react";
import "../Login/Login.css";
import { useMutation } from "@apollo/client";
import { login } from "../../queries";

const Login = () => {
  const[signInMusician, {data, loading, error}] = useMutation(login, {
    onCompleted: (data) => {
        console.log(data)
      },
    onError: (error) => {
        console.log(error)
      }
  })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleSubmit = () => {
    return {email: `${email}`, password: `${password}`}
  }
  console.log(loading)

  return(
    <section className="login-container">
    <form>
      <div className="login-modal">
        <div className="login-title">Login</div>
        <div className="login-underline"></div>
        <div className="login-input-fields">
          <p className="login-input-title">Email</p>
          <input className="input-field" type="text" onChange={e => setEmail(e.target.value)} required></input>
          <div className="login-field-underline"></div>
          <p className="login-input-title">Password</p>
          <input className="input-field" type="password"  onChange={e => setPassword(e.target.value)} required></input>
          <div className="login-field-underline"></div>
        </div>
        <button className="login-button" onClick={() => signInMusician({ variables: handleSubmit()})}>Login</button>
        <div className="login-links">
          <div className="forgot-password-link">Forgot Password?</div>
          <div className="new-account-link">Need An Account?</div>
        </div>
      </div>
      </form>
    </section>
  )
}

export default Login;
