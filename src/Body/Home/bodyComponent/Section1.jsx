import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <section className="home-sec1">
      <div className="home-sec1-share">
        <h3>SHARE</h3>
        <img src="./icon/facebook.png" alt="facebook icon" />
        <img src="./icon/twitter.png" alt="twitter icon" />
        <img src="./icon/instagram.png" alt="instagram icon" />
      </div>
      <div className="home-tltleInfo">
        <p className="home-findYourEnergy">FIND YOUR ENERGY</p>
        <img src="./titlebx.svg" alt="titlebx" />
        <h1>
          <b>MAKE YOUR BODY</b>
          <br />
          FIT & PERFECT
        </h1>
        <Link to="classes">
          <p className="home-ourClasses">
            <b>OUR CLASSE</b>
            <FontAwesomeIcon
              style={{ paddingLeft: '8px', color: 'red' }}
              icon={faArrowRightLong}
            />
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Section1
