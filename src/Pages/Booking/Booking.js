import React from 'react'
import RoomView from '../../Components/RoomView/RoomView'
import {getIndividualRoom} from "../../queries";
import {useQuery} from '@apollo/client';

const Booking = (props) => {
  const {loading, data, error} = useQuery(getIndividualRoom(props.id))


  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) :
      (<RoomView room={data.getRoom}/>
    )}
    </>
  )
}

export default Booking
