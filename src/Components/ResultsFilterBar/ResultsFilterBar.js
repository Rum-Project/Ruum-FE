import "./ResultsFilterBar.css";
import locationIcon from "../../Images/location.svg";
import calendarIcon from "../../Images/calendar.svg";
import musicIcon from "../../Images/music.svg";
import amenitiesIcon from "../../Images/amenities.svg";
import filterIcon from "../../Images/filter.svg";

const ResultsFilterBar = () => {
  return (
    <div className="filter-bar">
      <div className="filter-section">
        <img src={locationIcon} alt="location" className="filter-icon" />
        <div className="filter-location">
          <div className="filter-title">Place:</div>
          <div className="filter-location-value">Denver, CO</div>
        </div>
      </div>
      <div className="filter-section">
      <img src={calendarIcon} alt="location" className="filter-icon" />
        <div className="filter-date">
          <div className="filter-title">Date:</div>
          <div className="filter-date-value">March 28th</div>
        </div>
      </div>
      <div className="filter-section">
      <img src={musicIcon} alt="location" className="filter-icon" />
        <div className="filter-instruments">
          <div className="filter-title">Instruments Available:</div>
          <div className="filter-instruments-value">Drums, Piano, and More...</div>
        </div>
      </div>
      <div className="filter-section">
      <img src={amenitiesIcon} alt="location" className="filter-icon" />
        <div className="filter-amenities">
          <div className="filter-title">Amenities:</div>
          <div className="filter-amenities-value">Wifi</div>
        </div>
      </div>
      <div className="filter-section">
      <img src={filterIcon} alt="location" className="filter-icon" />
        <div className="filter-sort">
          <div className="filter-title">Sort By:</div>
          <div className="filter-sort-value">Price</div>
        </div>
      </div>
    </div>
  );
};

export default ResultsFilterBar;