import React from "react";
import RenterResultsContainer from "../../Components/RenterResultsContainer/RenterResultsContainer";

const Home = (props) => {
  const [allRooms, setAllRooms] = useState([]);

  //make fetch call, setAllRooms to data

  return (
    <div>
      <RenterResultsContainer rooms={allRooms} />
    </div>
  );
};

export default Home;
