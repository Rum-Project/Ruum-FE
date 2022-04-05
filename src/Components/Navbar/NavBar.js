import "./NavBar.css";
import profileIcon from "../../Images/profileIcon.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <h1 className="logo">RÜM</h1>
      </Link>
      <div className="link-container">
        <Link to="/dashboard">
          <div className="navigation-link bookings-link">Bookings</div>
        </Link>
        <Link to="/search">
          <div className="navigation-link search-link">Search</div>
        </Link>
        <Link to="/login">
          <img className="profilepic" src={profileIcon} alt="profile-pic" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
