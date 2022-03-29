import "../Footer/Footer.css";
import facebook from "../../Images/facebook.svg";
import twitter from "../../Images/twitter.svg";
import instagram from "../../Images/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p className="footer-info">Copyright 2022 RÜM</p>
        <p className="footer-links">
          {/* <Link to="home"> Home</Link> | */}
          <Link to="login"> Login</Link> | 
          <Link to="create-user"> Create New User</Link> | 
          <Link to="reset-password"> Forgot Password</Link> | 
          <Link to="contact-us"> Contact Us</Link></p>
        <div className="icon-container">
          <img src={facebook} className="footer-icon" alt="facebook icon" />
          <img src={twitter} className="footer-icon" alt="twitter icon" />
          <img src={instagram} className="footer-icon" alt="instagram icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
