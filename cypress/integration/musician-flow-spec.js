import { aliasQuery, aliasMutation } from "../../src/Utils/graphql-test-utils";

describe("Musician Music Flow", () => {
  // beforeEach(() => {
  // cy.intercept(
  //   "POST",
  //   "https://powerful-lake-27669.herokuapp.com/graphql",
  //   (req) => {
  //     aliasQuery(req, "getAvailableRooms", "roomcardFixture.json");
  //     aliasQuery(req, "getRoom", "roomDetailsFixture.json");
  //     aliasQuery(req, "getMusicianBookings", "bookingsFixture.json")

  //     // req.reply({ statusCode: 200, fixture: "roomcardFixture.json" });
  //   }
  // );
  // });
  it("On load the musician should see a list of room cards", () => {
    cy.intercept(
      "POST",
      "https://powerful-lake-27669.herokuapp.com/graphql",
      (req) => {
        aliasQuery(req, "getAvailableRooms", "roomcardFixture.json");
        aliasQuery(req, "getRoom", "roomDetailsFixture.json");
        aliasQuery(req, "getMusicianBookings", "bookingsFixture.json");
        aliasMutation(req, "signInMusician", "loginFixture.json");
      }
    );
    cy.visit("http://localhost:3000/");
    cy.visit("http://localhost:3000/login")
      .get(".username")
      .type("bruce@mail.com")
      .get(".user-password")
      .type("password")
      .get(".login-button")
      .click()
      .get(".search-link")
      .click()
      // THIS IS THE INITIAL START OF THE TEST
      .get(".results-container")
      .should("exist")
      .get(".result-card")
      .should("exist")
      .get(".house-photo")
      .should("exist")
      .get(".booking-card-details")
      .should("exist")
      .get(".booking-card-info-and-button-container")
      .should("exist")
      .get(".info-container")
      .should("exist")
      .get(".top-info")
      .should("exist")
      .get(".bottom-info")
      .should("exist") //
      .get(".info-container")
      .should("exist") //
      .get(".room-title")
      .first()
      .should("have.text", "Crungalow Studios")
      .get(".instrument-title")
      .first()
      .should("have.text", "Available Instruments:")
      .get(".button-container")
      .should("exist")
      .get(".more-details-button")
      .first()
      .click()

      // Details view

      .wait("@getRoom")
      .get(".detailed-view-container")
      .should("exist")
      .get(".detailed-view-card")
      .should("exist")
      .get(".detailed-view-photo")
      .should("exist")
      .get(".below-image")
      .should("exist")
      .get(".detailed-view-info")
      .should("exist")
      .get(".detailed-view-top-info")
      .should("exist")
      .get(".detailed-view-room-name-info")
      .should("exist")
      .get(".room-title")
      .first()
      .should("have.text", "Crungalow Studios")
      .get(".instrument-title")
      .first()
      .should("have.text", "Available Instruments:")
      .get(".instrument-text")
      .first()
      .should("have.text", "marimba")
      .get(".amenities-title")
      .first()
      .should("have.text", "Amenities:")
      .get(".amenities-text")
      .first()
      .should("have.text", "wifi, bathrooms")
      .get(".price-title")
      .first()
      .should("have.text", "Price:")
      .get(".price-text")
      .first()
      .should("have.text", "$152.95")
      .get(".book-now-button")
      .click()
      .get(".username")
      .type("bruce@mail.com")
      .get(".user-password")
      .type("password")
      .get(".login-button")
      .click()
      .get(".book-now-button")
      .click()
      .get(".username")
      .type("bruce@mail.com")
      .get(".user-password")
      .type("password")
      .get(".login-button")
      .click()
      .get(".book-now-button")
      .click()

      // Bookings View
      .url()
      .should("eq", "http://localhost:3000/dashboard")
      .get(".results-container")
      .should("exist")
      .get(".booking-card")
      .should("exist")
      .get(".house-photo")
      .should("exist")
      .get(".booking-card-details")
      .should("exist")
      .get(".booking-card-info-and-button-container")
      .should("exist")
      .get(".info-container")
      .should("exist")
      .get(".top-info")
      .should("exist")
      .get(".room-title")
      .first()
      .should("have.text", "Amphitheater 2")
      .get(".instrument-title")
      .first()
      .should("have.text", "Available Instruments:")
      .get(".instrument-text")
      .first()
      .should("have.text", "Trumpet")
      .get(".amenities-title")
      .first()
      .should("have.text", "Amenities:")
      .get(".amenities-text")
      .first()
      .should("have.text", "Wifi, bathrooms, drinking water")
      .get(".date-title")
      .first()
      .should("have.text", "Date:")
      .get(".date-text")
      .first()
      .should("have.text", "2022-04-30")
      .get(".price-title")
      .first()
      .should("have.text", "Price:")
      .get(".price-text")
      .first()
      .should("have.text", "$37.29")
      .get(".cancel-button")
      .should("exist"); //THIS NEEDS TO BE CHANGED THE SECOND THAT CANCEL BOOKING DOES ANYTHING
  });
});
