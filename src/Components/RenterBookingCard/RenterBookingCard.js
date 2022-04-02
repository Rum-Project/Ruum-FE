import "./RenterBookingCard.css";
import { useMutation } from "@apollo/client";
import { deleteBooking, getBookingsForMusician, getRoomsByDate } from "../../queries";

const RenterBookingCard = ({ booking }) => {
  // const formatDate = (date) => {
  //   return new Date(date).toLocaleDateString("en-us");
  // };
  const handleClick = () => {
    destroyBooking({variables: createDelete()})
  }
  const [destroyBooking, {}] = useMutation(deleteBooking, {
    refetchQueries:[{
      query:getBookingsForMusician(2)}, {query:getRoomsByDate(booking.date.slice(0,10))}]
  })
  const createDelete = () => {
    return {bookingId: `${booking.id}`}
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
                {booking.room.instruments}
              </p>
            </div>
          </div>
          <div className="info-container">
            <div className="top-info">
              <p className="card-title amenities-title">Amenities:</p>
              <p className="card-text amenities-text">
                {booking.room.amenities}
              </p>
            </div>
          </div>
          <div className="info-container">
            <div className="top-info">
              <p className="card-title date-title">Date:</p>
              <p className="card-text date-text">{booking.date}</p>
            </div>
            <div className="bottom-info">
              <p className="card-title price-title">Price:</p>
              <p className="card-text price-text">
                ${booking.room.price.toFixed(2)}
              </p>
            </div>
          </div>
          <button className="cancel-button" onClick={handleClick}>CANCEL BOOKING</button>
        </div>
      </div>
    </div>
  );
};

export default RenterBookingCard;
