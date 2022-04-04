import "./RenterResultsContainer.css";
import RenterResultCard from "../RenterResultCard/RenterResultCard";

const RenterResultsContainer = (props) => {
  return props.rooms.length > 0 ?
    <div className="results-container">
      {props.rooms.map((card) => {
        return (
          <RenterResultCard
            date={props.date}
            key={card.id}
            photo={card.photo}
            title={card.name}
            availableInstruments={card.instruments}
            amenities={card.amenities}
            price={card.price}
            id={card.id}
          />
        );
      })}
    </div>
   :
   <h3 className="results-error-message">Sorry, no rooms available that match your search! Consider being less picky!</h3>;
};

export default RenterResultsContainer;
