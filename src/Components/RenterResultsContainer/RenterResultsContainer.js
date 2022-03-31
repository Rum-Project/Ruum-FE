import "./RenterResultsContainer.css";
import RenterResultCard from "../RenterResultCard/RenterResultCard";

const RenterResultsContainer = (props) => {

  return (
    <div className="results-container">
      {props.rooms.map((card) => {
        return (
          <RenterResultCard
            key={card.id}
            photo={card.photo}
            title={card.name}
            availableInstruments={card.instruments}
            amenities={card.amenities}
            rating={card.rating}
            price={card.price}
            id={card.id}
          />
        );
      })}
    </div>
  );
};

export default RenterResultsContainer;
