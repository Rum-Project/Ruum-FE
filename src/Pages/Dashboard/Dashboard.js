import React from "react";
import RenterBookingsContainer from "../../Components/RenterBookingsContainer/RenterBookingsContainer";
import { getBookingsForMusician } from "../../queries";
import { useQuery } from "@apollo/client";


const Dashboard = () => {
  const {loading, data, error} = useQuery(getBookingsForMusician(2))//LONGTERM FIGURE OUT HOW TO MAKE THIS DYNAMIC ACCORDING TO LOG IN INFO!


  return (
    <>
    {loading ?
    (<h1>Loading...</h1>)
    :
    (<RenterBookingsContainer bookings={data.getMusicianBookings} />)
    }
    </>
  );
};

export default Dashboard;
