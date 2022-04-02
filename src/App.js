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
import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date(new Date().toLocaleDateString()).toJSON().slice(0,10));

  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/search" render={() => <Search date={date} setDate={setDate}/>} />

        <Route
          exact
          path="/booking/:id"
          render={({ match }) => <Booking id={match.params.id} date={date}/>}
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
