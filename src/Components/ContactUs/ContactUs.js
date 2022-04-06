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
          <img className="contact-photo" alt="contact" src="https://media-exp1.licdn.com/dms/image/C4E03AQEoxoPdyGkaBQ/profile-displayphoto-shrink_800_800/0/1618855561117?e=1654732800&v=beta&t=2-XTWXNyBP29_U-BX57E4NnC7DCkfckJmJt-Z8eNc-w"/>
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
          <img className="contact-photo" alt="contact" src="https://media-exp1.licdn.com/dms/image/C4D03AQFkAZa0ZQ9wtQ/profile-displayphoto-shrink_800_800/0/1635880725659?e=1654732800&v=beta&t=GrXfPwhw8Q2P7IYlVvS3KprNBiMzTnxfvSdHQ4jM5_M"/>
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
          <img className="contact-photo" alt="contact" src="https://media-exp1.licdn.com/dms/image/C4D03AQFxYbe9-XLToA/profile-displayphoto-shrink_800_800/0/1635880039181?e=2147483647&v=beta&t=4KSzkTs-7c4FIFzwYZ4Iy_idITaYak-YsAZIuUx4zYg"/>
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
          <img className="contact-photo" alt="contact" src="https://media-exp1.licdn.com/dms/image/D4E35AQFSeBMH27i8Pg/profile-framedphoto-shrink_800_800/0/1647618329734?e=1649300400&v=beta&t=xWIiqQP5ktoSLUvrWpXSXh30vINXy6p7IJWkiBf7kNc"/>
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
          <img className="contact-photo" alt="contact" src="https://media-exp1.licdn.com/dms/image/D4D35AQHJ9QWQbZ6FOg/profile-framedphoto-shrink_800_800/0/1644602744991?e=1649300400&v=beta&t=urPRCgOu2FlAU6ghp6RkhgcnLqAbaGUCaETHMVn5B2k"/>
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
          <img className="contact-photo" alt="contact" src="https://media-exp1.licdn.com/dms/image/D4E35AQH9TLsljNOggg/profile-framedphoto-shrink_800_800/0/1648052201230?e=1649300400&v=beta&t=Nc8ALVx81SCz8yQGXn3Vwy37PjGZUBbKAQ0g2gEAtlI"/>
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
          <img className="contact-photo" alt="contact" src="https://media-exp1.licdn.com/dms/image/D4D35AQGAeTVb7NBvDg/profile-framedphoto-shrink_800_800/0/1644619683925?e=1649300400&v=beta&t=XBOZQw1NuckDU-80s9pVFz3zkPwomX6QgP7f3Rajiog"/>
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
          <img className="contact-photo" alt="contact" src="https://media-exp1.licdn.com/dms/image/D4D35AQFgMdAp3uEh9w/profile-framedphoto-shrink_800_800/0/1646163865427?e=1649300400&v=beta&t=zCU1H7nBqfSdDBogwvLDmaQqc3pTbXUuGJF9pxyDj7Q"/>
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
