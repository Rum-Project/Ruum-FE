import "./RenterResultsContainer.css";
import RenterResultCard from "../RenterResultCard/RenterResultCard"


const RenterResultsContainer = () => {
  return (
    <div className="results-container">
      <RenterResultCard />
      <RenterResultCard />
      <RenterResultCard />
      <RenterResultCard />
      <RenterResultCard />
    </div>
  );
};

export default RenterResultsContainer;