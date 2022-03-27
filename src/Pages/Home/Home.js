import React from "react";
import RenterResultsContainer from "../../Components/RenterResultsContainer/RenterResultsContainer";
import { useQuery, gql } from "@apollo/client";

const Home = () => {
  return (
    <div>
      <RenterResultsContainer />
    </div>
  );
};

export default Home;
