import React from "react";
import Home from "./Pages/Home/Home.js";
import Search from "./Pages/Search/Search.js";
import Booking from "./Pages/Booking/Booking.js";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import Profile from "./Pages/Profile/Profile.js";
import Login from "./Components/Login/Login.js";
import CreateNewUser from "./Components/NewUserCreation/NewUserCreation.js";
import ResetPassword from "./Components/ResetPassword/ResetPassword.js";
import ContactUs from "./Components/ContactUs/ContactUs.js";
import Error from "./Pages/Error/Error.js";
import NavBar from "./Components/Navbar/NavBar.js";
import Footer from "./Components/Footer/Footer.js";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

function App() {
  let rooms = [
    {
      title: "Jeff's Auditiorium",
      room: "TV Room",
      availableInstruments: "Piano",
      amenities: "Wifi",
      rating: "4.5/5",
      price: 85,
    },
    {
      title: "Tony's Study",
      room: "Computer Room",
      availableInstruments: "Drums",
      amenities: "Drinking Water",
      rating: "5/5",
      price: 60,
    },
    {
      title: "Daniel's Kitchen",
      room: "Kitchen",
      availableInstruments: "none",
      amenities: "Drinking Water",
      rating: "5/5",
      price: 102,
    },
  ];

  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/search" render={() => <Search />} />

        <Route
          exact
          path="/booking/:id"
          render={({ match }) => <Booking id={match.params.id} />}
        />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route
          exact
          path="/profile"
          render={({ match }) => <Profile id={match.params.id} />}
        />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/create-user" render={() => <CreateNewUser />} />
        <Route exact path="/reset-password" render={() => <ResetPassword />} />
        <Route exact path="/contact-us" render={() => <ContactUs />} />
        <Route exact path="/error" component={Error} />
        <Redirect to="/error" />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
