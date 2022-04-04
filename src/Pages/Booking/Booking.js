import React from 'react'
import RoomView from '../../Components/RoomView/RoomView'
import Error from '../Error/Error';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation'
import {getIndividualRoom} from "../../queries";
import {useQuery} from '@apollo/client';

const Booking = (props) => {
  const {loading, data, error} = useQuery(getIndividualRoom(props.id))

  const handleLoadingAndError = () => {
    if (loading) {
      return <LoadingAnimation />
    } else if (error) {
      return <Error />
    } else {
      return <RoomView room={data.getRoom} date={props.date}/>
    }
  }

  return (
    <>
      {handleLoadingAndError()}
    </>
  )
}

export default Booking
