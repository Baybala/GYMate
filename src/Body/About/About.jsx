import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  return (
    <div className="about" id="about">
      <div className="about-container">
        <h1 className="aboutUS">
          <b>About Us</b>
        </h1>
        <div className="about-info-container">
          <div className="about-wheWeAre">
            <h3>
              <b>WHO WE ARE</b>
            </h3>
            <img src="./titlebx.svg" alt="titlebx" />
            <h1>
              <b>We Will Give You Strength and Health</b>
            </h1>
            <p>
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <Link to="/Classes" state={{ textDecoraion: 'none' }}>
              <p className="about-button">
                <b>
                  TAKE A TOUR
                  <FontAwesomeIcon
                    style={{ paddingLeft: '8px' }}
                    icon={faArrowRightLong}
                  />
                </b>
              </p>
            </Link>
          </div>
          <div className="about-whoWeAre-picture">
            <img className="img1" src="./pictures/running.png" alt="badge" />
            <img
              className="img2"
              src="./pictures/runningGirl.png"
              alt="badge"
            />
            <img className="img3" src="./pictures/oval.svg" alt="img3" />
            <img className="img4" src="./pictures/wind.png" alt="img4" />
          </div>
        </div>
        <div className="about-history-container">
          <div className="hist">
            <img src="./icon/historyIcon1.png" alt="ic1" />
            <h2>
              <b>Our History</b>
            </h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
              Exercitation veniam consequat.
            </p>
          </div>
          <div className="history-picture1"></div>
          <div className="history-picture2"></div>
          <div className="hist">
            <img src="./icon/historyIcon2.png" alt="ic1" />
            <h2>
              <b>Our History</b>
            </h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
              Exercitation veniam consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
