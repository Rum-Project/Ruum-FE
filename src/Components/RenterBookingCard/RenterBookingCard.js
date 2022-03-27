import "./RenterBookingCard.css";
import housepic from "../../Images/house.png";

const RenterBookingCard = () => {
  return (
    <div className="booking-card">
      <img src={housepic} className="house-photo" alt="room" />
      <div className="booking-card-details">
        <div className="booking-card-info-and-button-container">
          <div className="info-container">
            <div className="top-info">
              <p className="card-title room-title">Jeff's House</p>
              <p className="card-text room-text">Main Auditorium</p>
            </div>
            <div className="bottom-info">
              <p className="card-title instrument-title">Available Instruments:</p>
              <p className="card-text instrument-text">Piano, Drums, Kazoo, French Horn</p>
            </div>
          </div>
          <div className="info-container">
            <div className="top-info">
              <p className="card-title amenities-title">Amenities:</p>
              <p className="card-text amenities-text">Bathroom, WiFi, AC/Heat</p>
            </div>
          </div>
          <div className="info-container">
            <div className="top-info">
              <p className="card-title date-title">Date:</p>
              <p className="card-text date-text">3/28/2022</p>
            </div>
            <div className="bottom-info">
              <p className="card-title price-title">Price:</p>
              <p className="card-text price-text">$85</p>
            </div>
          </div>
          <button className="cancel-button">CANCEL BOOKING</button>
        </div>
      </div>
    </div>
  );
};

export default RenterBookingCard;
