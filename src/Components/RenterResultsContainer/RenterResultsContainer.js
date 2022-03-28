import "./RenterResultsContainer.css";
import RenterResultCard from "../RenterResultCard/RenterResultCard";
import ResultsFilterBar from "../ResultsFilterBar/ResultsFilterBar";

const RenterResultsContainer = (props) => {
  return (
    <div className="results-container">
      <ResultsFilterBar />
      {props.rooms.map((card) => {
        return (
          <RenterResultCard
            title={card.title}
            room={card.room}
            availableInstruments={card.availableInstruments}
            amenities={card.amenities}
            rating={card.rating}
            price={card.price}
          />
        );
      })}
    </div>
  );
};

export default RenterResultsContainer;
