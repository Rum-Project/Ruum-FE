import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import RenterResultsContainer from "./Components/RenterResultsContainer/RenterResultsContainer"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RenterResultsContainer />
      <Footer />
    </div>
  );
}

export default App;
