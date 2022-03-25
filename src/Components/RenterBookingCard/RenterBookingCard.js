import "./RenterBookingCard.css"
import housepic from '../../Images/house.png'

const RenterBookingCard = () => {
  return (
    <div className="booking-card">
      <img src={housepic} className="house-photo"/>
      <div className="booking-card-details">
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
            <p className="card-title">Date:</p>
            <p className="card-text"> 3/28/2022</p>
          </div>
          <div className="bottom-info">
            <p className="card-title">Price:</p>
            <p className="card-text"> $85</p>
          </div>
        </div>
        {/* <div className="buttons-container"> */}
          <button className="cancel-button">
            CANCEL BOOKING
          </button>
        {/* </div> */}
      </div>


    </div>
  );
};

export default RenterBookingCard;