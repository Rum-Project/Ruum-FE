import "../ContactUs/ContactUs.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="contact-us-page">
      <div className="contact-us-hero-image">
        <div className="contact-us-hero-text">
          <h1 className="contact-us-hero-header">
            MEET THE TEAM BEHIND THE APP
          </h1>
        </div>
      </div>
      <h1 className="contact-header">FRONT END TEAM:</h1>
      <div className="contacts">
        <div className="contact-card">
          <div className="contact-photo" alt="contact Photo"></div>
          <div className="contact-title">RANA</div>
          <div className="contact-underline"></div>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/rana-jurjus/" }}
            target="_blank"
          >
            <button className="contact-button">LINKEDIN</button>
          </Link>
          <Link to={{ pathname: "https://github.com/rjur11/" }} target="_blank">
            <button className="contact-button">GITHUB</button>
          </Link>
        </div>
        <div className="contact-card">
          <div className="contact-photo" alt="contact Photo"></div>
          <div className="contact-title">DANIEL</div>
          <div className="contact-underline"></div>
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/daniel-o-connell-maker/",
            }}
            target="_blank"
          >
            <button className="contact-button">LINKEDIN</button>
          </Link>
          <Link
            to={{ pathname: "https://github.com/Daniel-OC" }}
            target="_blank"
          >
            <button className="contact-button">GITHUB</button>
          </Link>
        </div>
        <div className="contact-card">
          <div className="contact-photo" alt="contact Photo"></div>
          <div className="contact-title">TONY</div>
          <div className="contact-underline"></div>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/tony-carpenter/" }}
            target="_blank"
          >
            <button className="contact-button">LINKEDIN</button>
          </Link>
          <Link
            to={{ pathname: "https://github.com/tonycarpenter21" }}
            target="_blank"
          >
            <button className="contact-button">GITHUB</button>
          </Link>
        </div>
        <div className="contact-card">
          <div className="contact-photo" alt="contact Photo"></div>
          <div className="contact-title">THOMAS</div>
          <div className="contact-underline"></div>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/tommi-t-nguyen/" }}
            target="_blank"
          >
            <button className="contact-button">LINKEDIN</button>
          </Link>
          <Link
            to={{ pathname: "https://github.com/tommi-t-nguyen" }}
            target="_blank"
          >
            <button className="contact-button">GITHUB</button>
          </Link>
        </div>
      </div>
      <h1 className="contact-header">BACK END TEAM:</h1>
      <div className="contacts">
        <div className="contact-card">
          <div className="contact-photo" alt="contact Photo"></div>
          <div className="contact-title">Hannah</div>
          <div className="contact-underline"></div>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/hannahkwarren/" }}
            target="_blank"
          >
            <button className="contact-button">LINKEDIN</button>
          </Link>
          <Link
            to={{ pathname: "https://github.com/hannahkwarren" }}
            target="_blank"
          >
            <button className="contact-button">GITHUB</button>
          </Link>
        </div>
        <div className="contact-card">
          <div className="contact-photo" alt="contact Photo"></div>
          <div className="contact-title">Chris</div>
          <div className="contact-underline"></div>
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/chris-hewitt-78721b21b/",
            }}
            target="_blank"
          >
            <button className="contact-button">LINKEDIN</button>
          </Link>
          <Link
            to={{ pathname: "https://github.com/Henchworm" }}
            target="_blank"
          >
            <button className="contact-button">GITHUB</button>
          </Link>
        </div>
        <div className="contact-card">
          <div className="contact-photo" alt="contact Photo"></div>
          <div className="contact-title">David</div>
          <div className="contact-underline"></div>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/david-kassin/" }}
            target="_blank"
          >
            <button className="contact-button">LINKEDIN</button>
          </Link>
          <Link to={{ pathname: "https://github.com/dkassin" }} target="_blank">
            <button className="contact-button">GITHUB</button>
          </Link>
        </div>
        <div className="contact-card">
          <div className="contact-photo" alt="contact Photo"></div>
          <div className="contact-title">Jackson</div>
          <div className="contact-underline"></div>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/valdez-jackson/" }}
            target="_blank"
          >
            <button className="contact-button">LINKEDIN</button>
          </Link>
          <Link
            to={{ pathname: "https://github.com/jacksonvaldez" }}
            target="_blank"
          >
            <button className="contact-button">GITHUB</button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default LandingPage;
