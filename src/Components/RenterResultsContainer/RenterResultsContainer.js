import "./RenterResultsContainer.css";
import RenterResultCard from "../RenterResultCard/RenterResultCard"
import ResultsFilterBar from "../ResultsFilterBar/ResultsFilterBar"

const RenterResultsContainer = () => {
  return (
    <div className="results-container">
      <ResultsFilterBar />
      <RenterResultCard />
      <RenterResultCard />
      <RenterResultCard />
      <RenterResultCard />
      <RenterResultCard />
    </div>
  );
};

export default RenterResultsContainer;