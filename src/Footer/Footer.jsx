import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="grid grid1">
          <img src="./icon/logo.svg" alt="logo" />
          <p>
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="footer-socialMedia">
            <img src="./icon/facebook.png" alt="facebook icon" />
            <img src="./icon/twitter.png" alt="twitter icon" />
            <img src="./icon/instagram.png" alt="instagram icon" />
          </div>
          <p>
            Privacy Policy | © 2023 Gymate
            <br />
            Design by Baybala Rustamov
          </p>
        </div>
        <div className="grid grid2">
          <h2>
            <b>Our Classes</b>
          </h2>
          <p>Fitness Classes</p>
          <p>Aerobics Classes</p>
          <p>Power Yoga</p>
          <p>Learn Machines</p>
          <p>Full-body Strength</p>
        </div>
        <div className="grid grid3">
          <h2>
            <b>Working Hours</b>
          </h2>
          <p>
            <b>Monday - Friday:</b>
          </p>
          <p>7:00am - 21:00pm</p>
          <p>
            <b>Saturday:</b>
          </p>
          <p>7:00am - 19:00pm</p>
          <p>
            <b>Sunday - Closed</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
