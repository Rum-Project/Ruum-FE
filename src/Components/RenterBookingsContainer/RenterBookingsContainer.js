import './RenterBookingsContainer.css'
import RenterBookingCard from '../RenterBookingCard/RenterBookingCard'
import ResultsFilterBar from '../ResultsFilterBar/ResultsFilterBar'


const RenterBookingsContainer = () => {
  return (
    <div className="results-container">
      <ResultsFilterBar />
      <h2>Upcoming Bookings:</h2>
      <RenterBookingCard />
      <RenterBookingCard />
      <h2>Past Bookings:</h2>
      <RenterBookingCard />
      <RenterBookingCard />
      <RenterBookingCard />
      <RenterBookingCard />
    </div>
  );
};

export default RenterBookingsContainer;