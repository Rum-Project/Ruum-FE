import "../HomePage/HomePage.css"
import { Link } from "react-router-dom";

const LandingPage = () => {
  return(
    <section className="home-page">
      <div className="hero-image">
        <div className="hero-text">
          <h1 className="hero-header">READY TO PLAY LOUD?</h1>
          <p>RÜM can help you find the best places to practice, without the fear of annoying your neighbors.</p>
          <Link to="search"><button className="call-to-action-button">START SEARCHING</button></Link>
        </div>
      </div>
      <div className="homepage-info">
        <div className="homepage-card">
        <h2>Revolutionize Your Rehearsal With Rüm</h2>
        <p>Rüm pairs musicians with the space, community, and support they need to get concert-ready. <br></br>Need a rehearsal space with a piano? Rüm for the whole choir? Soundproofed studio with an engineer? <br></br>We've got you covered.</p>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial-card">
          <div className="testimonial-photo-1" alt="Testimonial Photo"></div>
          <div className="testimonial-title">Nigel</div>
          <div className="testimonial-underline"></div>
          <div className="testimonial-quote">Rüm absolutely changed the game for my band. We used to get, 2-3 gigs a year! Thanks to Rüm, meow we're up to 3 or 4!</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-photo-2" alt="Testimonial Photo"></div>
          <div className="testimonial-title">SHARON</div>
          <div className="testimonial-underline"></div>
          <div className="testimonial-quote">Rüm has been PAWsitively life-changing. I ain't kitten around when I say you should try it right meow!!</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-photo-3" alt="Testimonial Photo"></div>
          <div className="testimonial-title">FRANK</div>
          <div className="testimonial-underline"></div>
          <div className="testimonial-quote">I'm so fur-tunate to have found this app! Rüm whiskered me away! All this extra practice has us feline like a new band!</div>
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