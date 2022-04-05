import "./RenterResultCard.css";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import {
  createNewBooking,
  getBookingsForMusician,
  getRoomsByDate,
} from "../../queries";

const RenterResultCard = (props) => {
  const history = useHistory();
  const navigateToBookings = () => {
    createBooking({ variables: createTestObject() });
    history.push("/dashboard");
  };

  const [createBooking] = useMutation(createNewBooking, {
    refetchQueries: [
      {
        query: getBookingsForMusician(props.userId),
      },
      { query: getRoomsByDate(props.date) },
    ],
  });
  const createTestObject = () => {
    return { date: `${props.date}`, musicianId: `${props.userId}`, roomId: `${props.id}` };
  };
  console.log("user Id",props.userId)

  return (
    <div className="result-card">
      <img src={props.photo} className="house-photo" alt="room" />
      <div className="booking-card-details">
        <div className="booking-card-info-and-button-container">
          <div className="info-container">
            <div className="top-info">
              <p className="card-title room-title">{props.title}</p>
            </div>
            <div className="bottom-info">
              <p className="card-title instrument-title">
                Available Instruments:
              </p>
              <p className="card-text instrument-text">
                {props.availableInstruments.charAt(0).toUpperCase() +
                  props.availableInstruments.slice(1)}
              </p>
            </div>
          </div>
          {/* <div className="info-container">
            <div className="top-info">
              <p className="card-title amenities-title">Amenities:</p>
              <p className="card-text amenities-text">
                {props.amenities.charAt(0).toUpperCase() +
                  props.amenities.slice(1)}
              </p>
            </div>
          </div> */}
          <div className="info-container">
            <div className="top-info">
              <p className="card-title amenities-title">Amenities:</p>
                <p className="card-text amenities-text">
                  {props.amenities.charAt(0).toUpperCase() +
                    props.amenities.slice(1)}
                </p>
            </div>
            <div className="bottom-info">
              <p className="card-title price-title">Price:</p>
              <p className="card-text price-text">${props.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="button-container">
            <Link to={`/booking/${props.id}`}>
              <button className="more-details-button">SEE DETAILS</button>
            </Link>
            {/* <Link to="/dashboard">
              <button className="book-room-button" onClick={() => {
                console.log("the booking is clicked!",loading)
                createBooking({ variables: createTestObject()})}}>BOOK ROOM</button>
            </Link> */}
            <button className="book-room-button" onClick={navigateToBookings}>
              BOOK ROOM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterResultCard;
