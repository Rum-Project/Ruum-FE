import "./RoomView.css";
import auditorium from "../../Images/auditorium.png";
const RoomView = () => {
  return (
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
                <p className="detailed-view-info-title">Jeff's House</p>
                <p className="detailed-view-specific-room-name">
                  Main Auditorium
                </p>
              </div>
              <div className="detailed-view-ratings-info">
                <div className="detailed-view-info-title">Ratings:</div>
                <div className="detailed-view-ratings-value">4.2/5</div>
              </div>
              <div className="detailed-view-price-info">
                <div className="detailed-view-info-title">Price:</div>
                <div className="detailed-view-rental-price">$85</div>
              </div>

              <div className="detailed-view-available-instruments-info">
                <div className="detailed-view-info-title">
                  Available Instruments:
                </div>
                <div className="detailed-view-instruments-list">
                  Piano, Drums, Kazoo, French Horn
                </div>
              </div>
              <div className="detailed-view-amenity-info">
                <div className="detailed-view-info-title">Amenities:</div>
                <div className="detailed-view-amenity-list">
                  Bathroom, Wifi, AC/Heat, Free Parking, Studio Recording and
                  Staff Check In
                </div>
              </div>
            </div>
            <div className="detailed-view-bottom-info">
              <div className="detailed-view-info-title">Full Description:</div>
              <div className="detailed-view-amenity-list">
                Jeff's House is the optimal place to record your next album.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>

          <button className="book-now-button">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
};

export default RoomView;
