import "../NewUserCreation/NewUserCreation.css"

const NewUserCreation = () => {
  return(
    <section className="new-user-creation-container">
      <div className="new-user-creation-modal">
        <div className="new-user-creation-title">Create Account</div>
        <div className="new-user-creation-underline"></div>
        <div className="new-user-creation-input-fields">
          <p className="new-user-creation-input-title">Name</p>
          <input className="input-field"></input>
          <div className="new-user-creation-field-underline"></div>
          <p className="new-user-creation-input-title">Email</p>
          <input className="input-field"></input>
          <div className="new-user-creation-field-underline"></div>
          <p className="new-user-creation-input-title">Password</p>
          <input className="input-field" type="password"></input>
          <div className="new-user-creation-field-underline"></div>
          <p className="new-user-creation-input-title">Re-Enter Password</p>
          <input className="input-field" type="password"></input>
          <div className="new-user-creation-field-underline"></div>
        </div>
        <button className="new-user-creation-button">Create A New User</button>
        <div className="new-user-creation-links">
          <div className="forgot-password-link">Forgot Password?</div>
          <div className="new-account-link">Already Have An Account?</div>
        </div>
      </div>
    </section>
  )
}

export default NewUserCreation;