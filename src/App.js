import React from "react";
import Home from "./Pages/Home/Home.js";
import Booking from "./Pages/Booking/Booking.js";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import Profile from "./Pages/Profile/Profile.js";
import Error from "./Pages/Error/Error.js";
import NavBar from "./Components/Navbar/NavBar.js";
import Footer from "./Components/Footer/Footer.js";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/Booking/:id"
          render={({ match }) => <Booking id={match.params.id} />}
        />
        <Route exact path="/Dashboard" render={() => <Dashboard />} />
        <Route
          exact
          path="/User/:id"
          render={({ match }) => <Profile id={match.params.id} />}
        />
        <Route exact path="/error" component={Error} />
        <Redirect to="/error" />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
