import React from "react";
import RenterBookingsContainer from "../../Components/RenterBookingsContainer/RenterBookingsContainer";
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation'
import { getBookingsForMusician } from "../../queries";
import { useQuery } from "@apollo/client";


const Dashboard = (props) => {
  const {loading, data} = useQuery(getBookingsForMusician(props.userId))


  return (
    <>
    {loading ?
    (<LoadingAnimation />)
    :
    (<RenterBookingsContainer bookings={data.getMusicianBookings} userId={props.userId}/>)
    }
    </>
  );
};

export default Dashboard;
