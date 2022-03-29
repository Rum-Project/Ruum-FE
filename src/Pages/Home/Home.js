import React from "react";
import RenterResultsContainer from "../../Components/RenterResultsContainer/RenterResultsContainer";
import ResultsFilterBar from "../../Components/ResultsFilterBar/ResultsFilterBar";
import getRoomsByDate from '../../queries'
import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const Home = () => {
const [date, setDate] = useState(new Date().toJSON().slice(0,10))

const {loading, data, error} = useQuery(getRoomsByDate(date))





  // make fetch call, setAllRooms to data

  return (
    <>
      <ResultsFilterBar date={date} setDate={setDate}/>
      {loading ? (<h1>Loading...</h1>) :(<RenterResultsContainer rooms={data.getAvailableRooms}/>)}
    </>
  );
};

export default Home;
