import "../ResetPassword/ResetPassword.css"

const ResetPassword = () => {
  return(
    <section className="reset-password-container">
      <div className="reset-password-modal">
        <div className="reset-password-title">Reset Password</div>
        <div className="reset-password-underline"></div>
        <div className="reset-password-input-fields">
          <p className="reset-password-input-title">Email</p>
          <input className="input-field"></input>
          <div className="reset-password-field-underline"></div>
        </div>
        <button className="reset-password-button">Reset Password</button>
        <div className="reset-password-links">
          <div className="forgot-password-link">Need An Account?</div>
          <div className="new-account-link">Already Have An Account?</div>
        </div>
      </div>
    </section>
  )
}

export default ResetPassword;