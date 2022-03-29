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
  
export default getRoomsByDate;