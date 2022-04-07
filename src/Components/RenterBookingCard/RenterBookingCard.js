import "./RenterBookingCard.css";
import { useMutation } from "@apollo/client";
import { deleteBooking, getBookingsForMusician, getRoomsByDate } from "../../queries";
import { printIntrospectionSchema } from "graphql";

const RenterBookingCard = ({ booking, userId, cardType }) => {
  
  const handleClick = () => {
    destroyBooking({variables: createDelete()})
  }
  const [destroyBooking] = useMutation(deleteBooking, {
    refetchQueries:[{
      query:getBookingsForMusician(userId)}, {query:getRoomsByDate(booking.date.slice(0,10))}]
  })
  const createDelete = () => {
    return {bookingId: `${booking.id}`}
  }

  const checkForButton = () => {
    if (cardType === "future") {
      return(
        <button className="cancel-button" onClick={handleClick}>CANCEL BOOKING</button>
      )
    } 
  }

  return (
    <div className="booking-card">
      <img src={booking.room.photo} className="house-photo" alt="room" />
      <div className="booking-card-details">
        <div className="booking-card-info-and-button-container">
          <div className="info-container">
            <div className="top-info">
              <p className="card-title room-title">{booking.room.name}</p>
            </div>
            <div className="bottom-info">
              <p className="card-title instrument-title">
                Available Instruments:
              </p>
              <p className="card-text instrument-text">
                {booking.room.instruments.charAt(0).toUpperCase() + booking.room.instruments.slice(1)}
              </p>
            </div>
          </div>
          <div className="info-container">
            <div className="top-info">
              <p className="card-title amenities-title">Amenities:</p>
              <p className="card-text amenities-text">
                {booking.room.amenities.charAt(0).toUpperCase() + booking.room.amenities.slice(1)}
              </p>
            </div>
          </div>
          <div className="info-container">
            <div className="top-info">
              <p className="card-title date-title">Date:</p>
              <p className="card-text date-text">{booking.date.substring(0,10)}</p>
            </div>
            <div className="bottom-info">
              <p className="card-title price-title">Price:</p>
              <p className="card-text price-text">
                ${booking.room.price.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="button-container">
            {checkForButton()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenterBookingCard;
