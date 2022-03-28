import React from "react";
import RenterResultsContainer from "../../Components/RenterResultsContainer/RenterResultsContainer";
import getRoomsByDate from '../../queries'
import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const Home = (props) => {
  const [allRooms, setAllRooms] = useState([]);

  

  const {loading, data, error} = useQuery(getRoomsByDate(new Date().toJSON().slice(0,10)))
//look up refetch
  console.log(loading, data, error)
  




  // make fetch call, setAllRooms to data

  return (
    <div>
      <RenterResultsContainer rooms={[]} />
    </div>
  );
};

export default Home;
