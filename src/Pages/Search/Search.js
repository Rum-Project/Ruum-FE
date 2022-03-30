import React from "react";
import RenterResultsContainer from "../../Components/RenterResultsContainer/RenterResultsContainer";
import ResultsFilterBar from "../../Components/ResultsFilterBar/ResultsFilterBar";
import { getRoomsByDate } from "../../queries";
import { useState } from "react";
import { useQuery } from "@apollo/client";

const Search = () => {
  const [date, setDate] = useState(new Date().toJSON().slice(0, 10));
  const { loading, data } = useQuery(getRoomsByDate(date));
  const [availableInstSelect, setAvailableInstSelect] = useState([]);
  const [availableAmenSelect, setAvailableAmenSelect] = useState([]);
  const [sortSelect, setSortSelect] = useState({
    value: "High-to-Low",
    label: "Cost High-to-Low",
  });
  let rooms = [];
  console.log(sortSelect);
  if (!loading) {
    console.log("availabeInst", availableInstSelect);
    rooms = data.getAvailableRooms
      .filter((room) =>
        availableInstSelect.every((instrument) =>
          room.instruments.split(", ").includes(instrument.value)
        )
      )
      .filter((room) =>
        availableAmenSelect.every((amenity) =>
          room.amenities.split(", ").includes(amenity.value)
        )
      )
      .sort((a, b) => {
        let result = 0;
        if (a.price < b.price) {
          result = 1;
        } else if (a.price > b.price) {
          result = -1;
        }
        return sortSelect.value === "Low-to-High" ? -result : result;
      });
  }
  console.log(rooms);
  return (
    <>
      <ResultsFilterBar
        date={date}
        setDate={setDate}
        availableInstruments={availableInstSelect}
        onAvailableInstrumentsChange={setAvailableInstSelect}
        availableAmenities={availableAmenSelect}
        onAvailableAmenitiesChange={setAvailableAmenSelect}
        sortSelect={sortSelect}
        onSortChange={setSortSelect}
      />
      {loading ? <h1>Loading...</h1> : <RenterResultsContainer rooms={rooms} />}
    </>
  );
};

// make fetch call, setAllRooms to data

export default Search;
