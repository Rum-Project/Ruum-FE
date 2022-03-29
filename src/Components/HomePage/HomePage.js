import "../HomePage/HomePage.css"
import { Link } from "react-router-dom";

const LandingPage = () => {
  return(
    <section className="home-page">
      <div className="hero-image">
        <div className="hero-text">
          <h1 className="hero-header">READY TO PLAY LOUD?</h1>
          <p>RÜM can help you find the best places to practice without the fear of annoying your neighbors... again.</p>
          <Link to="search"><button className="call-to-action-button">START SEARCHING</button></Link>
        </div>
      </div>
      <div className="homepage-info">
        <div className="homepage-card">
        <h2>RÜM pairs musicians with places to transform the world of practicing music.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial-card">
          <div className="testimonial-photo" alt="Testimonial Photo"></div>
          <div className="testimonial-title">BOB</div>
          <div className="testimonial-underline"></div>
          <div className="testimonial-quote">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-photo" alt="Testimonial Photo"></div>
          <div className="testimonial-title">SHARON</div>
          <div className="testimonial-underline"></div>
          <div className="testimonial-quote">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-photo" alt="Testimonial Photo"></div>
          <div className="testimonial-title">FRANK</div>
          <div className="testimonial-underline"></div>
          <div className="testimonial-quote">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>
      <div className="homepage-info">
        <div className="homepage-card">
          <h2>Interested in renting out your space?</h2> 
          <Link to="contact-us"><button className="call-to-action-button">Contact Us</button></Link>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </section>
  )
}

export default LandingPage;