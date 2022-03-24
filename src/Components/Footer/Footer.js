import "../Footer/Footer.css";
import facebook from "../../Images/facebook.svg";
import twitter from "../../Images/twitter.svg";
import instagram from "../../Images/instagram.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>Copyright 2022 RÜM</p>
        <p>Contact Us | FAQ</p>
        <div className="icon-container">
          <img src={facebook} className="footericon" alt="facebook icon" />
          <img src={twitter} className="footericon" alt="twitter icon" />
          <img src={instagram} className="footericon" alt="instagram icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
