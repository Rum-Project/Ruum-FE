import {gql} from "@apollo/client"

const getRoomsByDate = (date) => gql`
  {
    getAvailableRooms(date: "${date}") {
      id
      name
      photo
      price
      amenities
      instruments
      }
  }`

const getIndividualRoom = (id) => gql`
  {
    getRoom(id: "${id}") {
      id
      name
      details
      photo
      address
      city
      state
      zip
      price
      amenities
      instruments
      capacity
      }
  }`

const getBookingsForMusician = (musicianId) => gql`
  { getMusicianBookings(id: "${musicianId}")
        {
          date
          room {
            id
            name
            host {
              name
            }
            details
            photo
            address
            city
            state
            zip
            price
            amenities
            instruments
            capacity
          }
        }
      }`
  
export {getRoomsByDate, getIndividualRoom, getBookingsForMusician};