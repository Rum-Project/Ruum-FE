import { gql } from "@apollo/client";

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
  }`;

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
  }`;

const getBookingsForMusician = (musicianId) => gql`
  {
    getMusicianBookings(id: "${musicianId}")
        {
          id
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
      }`;

const createNewBooking = gql`
  mutation CreateBooking($date: String!, $musicianId: ID!, $roomId: ID!) {
    createBooking(
      input: { date: $date, musicianId: $musicianId, roomId: $roomId }
    ) {
      date
      musician {
        id
        name
      }
      room {
        id
        name
        details
        photo
        price
      }
    }
  }
`;

const deleteBooking = gql`
  mutation DestroyBooking($bookingId: ID!) {
    destroyBooking(input: { bookingId: $bookingId }) {
      id
    }
  }
`;

const login = gql`
mutation Login($email: String!, $password: String!){
  signInMusician(
    input: {credentials: {email: $email, password: $password}}
    ) {
    musician {
      id
      }
    }
  }
`;

export {
  getRoomsByDate,
  getIndividualRoom,
  getBookingsForMusician,
  createNewBooking,
  deleteBooking,
  login
};
