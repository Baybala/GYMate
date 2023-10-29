import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faRectangleXmark,
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

const SideChart = ({ sideChartOn, sideChartClick }) => {
  return (
    <div
      className={
        sideChartOn
          ? 'header-section-sideChart-open'
          : 'header-section-sideChart-close'
      }
    >
      <div>
        <div className="sideChart-head">
          <div className="sideChart-logo">
            <div className="sideChart-logo-image">
              <img src="./gymateLogo.png" alt="logo" />
            </div>
            <div className="sideChart-logo-logo">
              <h2 style={{ margin: 0 }}>GYMATE</h2>
              <h6 style={{ margin: 0 }}>ULTIMATE GYM CENTER</h6>
            </div>
          </div>
          <div className="sideChart-closeButton" onClick={sideChartClick}>
            <FontAwesomeIcon icon={faRectangleXmark} />
          </div>
        </div>
        <div className="sideChart-aboutUs">
          <h2>About Us</h2>
          <p>
            Find out who we are and what makes us unique. We are a
            community-driven gym committed to providing personalized fitness
            experiences for all levels of fitness enthusiasts in a welcoming and
            supportive environment.
          </p>
        </div>
        <div className="sideChart-gallery">
          <h2>Gallery</h2>
          <ul>
            <li>
              <img src="./pictures/Pic1.jpg" alt="gymPic1" />
            </li>
            <li style={{ margin: '0px 5px' }}>
              <img src="./pictures/Pic2.jpg" alt="gymPic1" />
            </li>
            <li>
              <img src="./pictures/Pic3.jpg" alt="gymPic1" />
            </li>
            <li>
              <img src="./pictures/Pic4.jpg" alt="gymPic1" />
            </li>
            <li style={{ margin: '0px 5px' }}>
              <img src="./pictures/Pic5.jpg" alt="gymPic1" />
            </li>
            <li>
              <img src="./pictures/Pic6.jpg" alt="gymPic1" />
            </li>
          </ul>
        </div>
        <div className="sideChart-contactInfo">
          <h2>Contact Info</h2>
          <div>
            <FontAwesomeIcon style={{ color: 'red' }} icon={faLocationDot} />
            <p>Said Azim Shirvani 14 / 134</p>
          </div>
          <div>
            <FontAwesomeIcon style={{ color: 'red' }} icon={faPhone} />
            <p>+994 51 421 73 74</p>
          </div>
          <div>
            <FontAwesomeIcon style={{ color: 'red' }} icon={faEnvelope} />
            <p type="email">rustamov.b@hotmail.com</p>
          </div>
        </div>
      </div>
      <div className="sideChart-followUs">
        <h2>Follow Us</h2>
        <div>
          <img
            style={{ cursor: 'pointer' }}
            src="./icon/facebook.png"
            alt="facebook icon"
          />
          <img
            style={{ cursor: 'pointer', marginLeft: '7px' }}
            src="./icon/twitter.png"
            alt="twitter icon"
          />
          <img
            style={{ cursor: 'pointer', marginLeft: '7px' }}
            src="./icon/instagram.png"
            alt="instagram icon"
          />
        </div>
      </div>
    </div>
  )
}

export default SideChart
