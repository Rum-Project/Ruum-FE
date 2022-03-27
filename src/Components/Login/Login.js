import "../Login/Login.css"

const Login = () => {
  return(
    <section className="login-container">
      <div className="login-modal">
        <div className="login-title">Login</div>
        <div className="login-underline"></div>
        <div className="login-input-fields">
          <p className="login-input-title">Email</p>
          <input className="input-field"></input>
          <div className="login-field-underline"></div>
          <p className="login-input-title">Password</p>
          <input className="input-field" type="password"></input>
          <div className="login-field-underline"></div>
        </div>
        <button className="login-button">Login</button>
        <div className="login-links">
          <div className="forgot-password-link">Forgot Password?</div>
          <div className="new-account-link">Need An Account?</div>
        </div>
      </div>
    </section>
  )
}

export default Login;