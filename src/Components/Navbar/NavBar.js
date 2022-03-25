import "./NavBar.css";
import profileIcon from "../../Images/profileIcon.svg";

const NavBar = () => {
  return (
    <nav className="navigation">
      <h1 className="logo">RÜM</h1>
      <div className="link-container">
        <div className="navigation-link">Bookings</div>
        <img className="profilepic" src={profileIcon} alt="profile-pic" />
      </div>
    </nav>
  );
};

export default NavBar;
