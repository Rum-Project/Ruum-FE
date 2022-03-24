import "./RenterResultCard.css";
import housepic from "../../Images/house.png"
const RenterResultCard = () => {
  return (
    <div className="result-card">
      <img src={housepic} className="house-photo"/>
      <div className="card-info">
        <div className="card-top-info">
          <div className="room-name-info">
            <div className="info-title">Jeff's House</div>
            <div className="specific-room-name">Main Auditorium</div>
          </div>
          <div className="ratings-info">
            <div className="info-title">Ratings:</div>
            <div className="ratings-value">4.2/5</div>
          </div>
          <div className="price-info">
            <div className="info-title">Price:</div>
            <div className="rental-price">$85</div>
          </div>
        </div>
        <div className="card-bottom-info">
          <div className="available-instruments-info">
            <div className="info-title">Available Instruments:</div>
            <div className="instruments-list">Piano, Drums, Kazoo, French Horn</div>
          </div>
          <div className="amenity-info">
            <div className="info-title">Amenities:</div>
            <div className="amenity-list">Bathroom, Wifi, AC/Heat, and More...</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RenterResultCard;