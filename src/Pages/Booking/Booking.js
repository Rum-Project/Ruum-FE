import React from 'react'
import RoomView from '../../Components/RoomView/RoomView'
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation'
import {getIndividualRoom} from "../../queries";
import {useQuery} from '@apollo/client';

const Booking = (props) => {
  const {loading, data} = useQuery(getIndividualRoom(props.id))


  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) :
      (<RoomView room={data.getRoom} date={props.date}/>
    )}
    </>
  )
}

export default Booking
