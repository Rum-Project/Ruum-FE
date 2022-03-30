import "./RoomView.css";
import auditorium from "../../Images/auditorium.png";
import { Link } from "react-router-dom";

const RoomView = ({room}) => {


  return (
    <>
      <div className="detailed-view-container">
        <div className="detailed-view-card">
          <img
            src={auditorium}
            className="detailed-view-photo"
            alt="detailed-room-view"
          />
          <div className="below-image">
            <div className="detailed-view-info">
              <div className="detailed-view-top-info">
                <div className="detailed-view-room-name-info">
                  <p className="detailed-view-info-title room-title">{room.name}</p>
                </div>
                <div className="detailed-view-price-info">
                  <div className="detailed-view-info-title price-title">Price:</div>
                  <div className="detailed-view-rental-price price-text">${room.price.toFixed(2)}</div>
                </div>
                <div className="detailed-view-available-instruments-info">
                  <div className="detailed-view-info-title instrument-title">
                    Available Instruments:
                  </div>
                  <div className="detailed-view-instruments-list instrument-text">
                  {room.instruments}
                  </div>
                </div>
                <div className="detailed-view-amenity-info">
                  <div className="detailed-view-info-title amenities-title">Amenities:</div>
                  <div className="detailed-view-amenity-list amenities-text">
                  {room.amenities}
                  </div>
                </div>
              </div>
              <div className="detailed-view-bottom-info">
                <div className="detailed-view-info-title description-title">Full Description:</div>
                <div className="detailed-view-amenity-list description-text">
                {room.details}
                </div>
              </div>
            </div>

            <Link to="/dashboard">
              <button className="book-now-button">BOOK NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomView;
