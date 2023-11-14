import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDumbbell,
  faPersonBiking,
  faHeartCircleBolt,
  faMountainSun,
} from '@fortawesome/free-solid-svg-icons'

const Section3 = () => {
  //   const galleryData = [{className: }]
  return (
    <section className="home-sec3">
      <div className="home-sec3-container">
        <h4>
          <b>OUR FEATURED CLASS</b>
        </h4>
        <img src="./titlebx.svg" alt="titlebx" />
        <h1 style={{ margin: '50px', fontSize: '42px' }}>
          <b>We Are Offering Best Flexible Classes</b>
        </h1>
        <div className="home-sec3-gallery-grid-container">
          <div className="item grid-item1">
            <div className="image grid-item-image1"></div>
            <div className="sideBadge">
              <FontAwesomeIcon
                className="sideBadge-icon"
                icon={faPersonBiking}
              />
            </div>
            <h1>Cycling</h1>
            <p>Wednesday: 9:00am-10:00am</p>
          </div>
          <div className="item grid-item2">
            <div className="image grid-item-image2"></div>
            <div className="sideBadge">
              <FontAwesomeIcon
                className="sideBadge-icon"
                icon={faMountainSun}
              />
            </div>
            <h1>Karate</h1>
            <p>Friday: 10:00am-11:00am</p>
          </div>
          <div className="item grid-item3">
            <div className="image grid-item-image3"></div>
            <div className="sideBadge">
              <FontAwesomeIcon className="sideBadge-icon" icon={faDumbbell} />
            </div>
            <h1>Power</h1>
            <p>Saturday: 9:00am-10:00am</p>
          </div>
          <div className="item grid-item4">
            <div className="image grid-item-image4"></div>
            <div className="sideBadge">
              <FontAwesomeIcon
                className="sideBadge-icon"
                icon={faPersonBiking}
              />
            </div>
            <h1>Meditation</h1>
            <p>Friday: 1:00pm-2:00pm</p>
          </div>
          <div className="item grid-item5">
            <div className="image grid-item-image5"></div>
            <div className="sideBadge">
              <FontAwesomeIcon
                className="sideBadge-icon"
                icon={faPersonBiking}
              />
            </div>
            <h1>Martial Arts</h1>
            <p>Sunday: 6:00pm-7:00pm</p>
          </div>
          <div className="item grid-item6">
            <div className="image grid-item-image6"></div>
            <div className="sideBadge">
              <FontAwesomeIcon
                className="sideBadge-icon"
                icon={faHeartCircleBolt}
              />
            </div>
            <h1>Workout</h1>
            <p>Monday: 4:00pm-5:00pm</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
