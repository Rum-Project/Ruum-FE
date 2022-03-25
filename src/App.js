import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import RenterResultsContainer from "./Components/RenterResultsContainer/RenterResultsContainer"
import RoomView from "./Components/RoomView/RoomView";
import Footer from "./Components/Footer/Footer";
import RenterBookingsContainer from "./Components/RenterBookingsContainer/RenterBookingsContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <RenterResultsContainer /> */}
      <RenterBookingsContainer />
      {/* <RoomView /> */}
      <Footer />
    </div>
  );
}

export default App;
