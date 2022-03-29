import React from "react";
import RenterResultsContainer from "../../Components/RenterResultsContainer/RenterResultsContainer";
import ResultsFilterBar from "../../Components/ResultsFilterBar/ResultsFilterBar";
import getRoomsByDate from "../../queries";
import { useState } from "react";
import { useQuery } from "@apollo/client";

const Search = () => {
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const { loading, data } = useQuery(getRoomsByDate(date));

  return (
    <>
      <ResultsFilterBar date={date} setDate={setDate} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <RenterResultsContainer rooms={data.getAvailableRooms} />
      )}
    </>
  );
};

// make fetch call, setAllRooms to data

export default Search;
