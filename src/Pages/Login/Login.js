import React, { useState } from "react";
import "../Login/Login.css";
import { useMutation } from "@apollo/client";
import { login } from "../../queries";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();
  console.log(history)
  const[signInMusician, { data,loading, error, called}] = useMutation(login, {
    onCompleted: (signInMusician) => {
        console.log("on Complete", loading, error, data, called)
      },
    onError: () => {
        console.log(error, called)
      }
  })
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfo = {email: email, password: password}
    signInMusician({variables: userInfo})
    .then(response => props.setUserId(response.data.signInMusician.musician.id))
    setEmail("")
    setPassword("")
    history.goBack()
  }

  

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
        <button className="login-button" onClick={(e) => handleSubmit(e)}>Login</button>
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
