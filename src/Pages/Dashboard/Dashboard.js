import React from "react";
import RenterBookingsContainer from "../../Components/RenterBookingsContainer/RenterBookingsContainer";
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation'
import { getBookingsForMusician } from "../../queries";
import { useQuery } from "@apollo/client";


const Dashboard = () => {
  const {loading, data} = useQuery(getBookingsForMusician(2))//LONGTERM FIGURE OUT HOW TO MAKE THIS DYNAMIC ACCORDING TO LOG IN INFO!


  return (
    <>
    {loading ?
    (<LoadingAnimation />)
    :
    (<RenterBookingsContainer bookings={data.getMusicianBookings} />)
    }
    </>
  );
};

export default Dashboard;
