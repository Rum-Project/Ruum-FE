import React from 'react'
import RoomView from '../../Components/RoomView/RoomView'

const Booking = (props) => {
  return (
    <div>
      <RoomView id={props.id}/>
    </div>
  )
}

export default Booking
