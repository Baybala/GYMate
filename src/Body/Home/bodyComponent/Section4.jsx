import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Section4 = () => {
  return (
    <section className="home-sec4">
      <div className="home-sec4-head">
        <div>
          <h1>
            <b>
              We Are Always Providing Best
              <br />
              Fitness Service For You
            </b>
          </h1>
          <Link to="/Contact" style={{ textDecoration: 'none' }}>
            <p className="home-sec4-head-btn">
              TAKE A TOUR
              <FontAwesomeIcon
                style={{ paddingLeft: '8px' }}
                icon={faArrowRightLong}
              />
            </p>
          </Link>
        </div>
      </div>
      <div className="home-sec4-container">
        <div className="home-sec4-body">
          <div className="home-sec4-body-video">
            <img src="./pictures/pic7.png" alt="video-pic" />
          </div>
          <div className="home-sec4-body-WhyChooseUS">
            <h4>WHY CHOOSE US</h4>
            <img src="./titlebx.svg" alt="titlebx" />
            <h1>
              <b>We Can Give A Shape Of Your Body Here!</b>
            </h1>
            <p className="home-sec4-body-inforText">
              At <b>Gymate</b>, we are dedicated to helping you achieve the body
              of your dreams. Our expert trainers and nutritionists will work
              with you to create a personalized fitness and nutrition plan that
              helps you reach your specific goals.
            </p>
            <div className="home-sec4-body-info">
              <div className="fitnessTraining">
                <div>
                  <img src="./icon/fitnessTraining.png" alt="fitnessPic" />
                </div>
                <h3>Free Fitness Training</h3>
              </div>
              <div>
                <div>
                  <img src="./icon/gymEquipment.png" alt="gymEquipment" />
                </div>
                <h3>Modern Gym Equipments</h3>
              </div>
              <div>
                <div>
                  <img src="./icon/gymBag.png" alt="gymBag" />
                </div>
                <h3>Gym Bag Equipments</h3>
              </div>
              <div>
                <div>
                  <img src="./icon/waterBottle.png" alt="waterBottle" />
                </div>
                <h3>Fresh Bottle Watter</h3>
              </div>
            </div>
            <Link to="/Classes" style={{ textDecoration: 'none' }}>
              <p className="home-sec4-btn">
                OUR CLASSES
                <FontAwesomeIcon
                  style={{ paddingLeft: '8px' }}
                  icon={faArrowRightLong}
                />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4
