import "./RenterResultCard.css";
import housepic from "../../Images/house.png"
const RenterResultCard = () => {
  return (
    <div className="result-card">
      <img src={housepic} className="house-photo" alt="room"/>
      <div className="booking-card-details">
        <div className="booking-card-info-and-button-container">
          <div className="info-container">
            <div className="top-info">
              <p className="card-title">Jeff's House</p>
              <p className="card-text"> Main Auditorium</p>
            </div>
            <div className="bottom-info">
              <p className="card-title">Available Instruments:</p>
              <p className="card-text">Piano, Drums, Kazoo, French Horn</p>
            </div>
          </div>
          <div className="info-container">
            <div className="top-info">
              <p className="card-title">Amenities:</p>
              <p className="card-text">Bathroom, WiFi, AC/Heat</p>
            </div>
          </div>
          <div className="info-container">
            <div className="top-info">
                <p className="card-title">Ratings:</p>
                <p className="card-text">4.2/5</p>
              </div>
            <div className="bottom-info">
              <p className="card-title">Price:</p>
              <p className="card-text"> $85</p>
            </div>
          </div>
          <div className="button-container">
            <button className="more-details-button">
              SEE DETAILS
            </button>
            <button className="book-room-button">
              BOOK ROOM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterResultCard;