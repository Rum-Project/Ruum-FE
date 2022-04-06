import "./RenterBookingsContainer.css";
import RenterBookingCard from "../RenterBookingCard/RenterBookingCard";

const RenterBookingsContainer = (props) => {
  const getFutureBookings = () => {
    const today = new Date(new Date().toDateString());
    const futureBookings = props.bookings.filter((booking) => {
      return new Date(booking.date) > today;
    });
    futureBookings.sort((a, b) => {
      a = new Date(a.date);
      b = new Date(b.date);
      if (a < b) {
        return -1;
      } else if (b < a) {
        return 1;
      } else {
        return 0;
      }
    });
    return futureBookings.length > 0 ? futureBookings.map((booking) => {
      return (
        <RenterBookingCard key={booking.id} id={booking.id} booking={booking} userId={props.userId}/>
      );
    }) 
    :
    <h3 className="bookings-error-message">No Upcoming Bookings! How will you rehearse?!?!</h3> ;
  };

  const getPastBookings = () => {
    const today = new Date(new Date().toDateString());
    const pastBookings = props.bookings.filter((booking) => {
      return new Date(booking.date) < today;
    });
    pastBookings.sort((a, b) => {
      a = new Date(a.date);
      b = new Date(b.date);
      if (a > b) {
        return -1;
      } else if (b < a) {
        return 1;
      } else {
        return 0;
      }
    });
    return pastBookings.length > 0 ? pastBookings.map((booking) => {
      return (
        <RenterBookingCard key={booking.id} id={booking.id} booking={booking} />
      );
    })
    : 
    <h3 className="bookings-error-message">No past bookings! Book your first one today!</h3>;
  };

  return (
    <div className="results-container">
      <h2>Upcoming Bookings:</h2>
      {getFutureBookings()}
      <h2>Past Bookings:</h2>
      {getPastBookings()}
    </div>
  );
};

export default RenterBookingsContainer;
