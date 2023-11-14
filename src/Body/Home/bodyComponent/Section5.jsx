import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Section4 = () => {
  return (
    <section className="home-sec5">
      <div className="home-sec5-container">
        <img src="./titlebx.svg" alt="titlebx" />
        <h4 className="home-sec5-headText_gymTrainers">GYM TRAINERS</h4>
        <h1 className="home-sec5-headText_teamOfExpertCouches">
          <b>Team Of Expert Coaches</b>
        </h1>
        <p className="home-sec5-paragraphText">
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
        <div className="home-sec5-coaches">
          <div>
            <div className="home-sec5-coacheImage">
              <img src="./pictures/Im1.png" alt="coach" />
            </div>
            <div className="home-sec5-coacheInfo">
              <FontAwesomeIcon icon={faAngleUp} />
              <h2>John Lewis</h2>
              <p>Yoga Trainer</p>
            </div>
          </div>
          <div>
            <div className="home-sec5-coacheImage">
              <img src="./pictures/Im2.png" alt="coach" />
            </div>
            <div className="home-sec5-coacheInfo">
              <FontAwesomeIcon icon={faAngleUp} />
              <h2>Jonathon Doe</h2>
              <p>Crossfit Trainer</p>
            </div>
          </div>
          <div>
            <div className="home-sec5-coacheImage">
              <img src="./pictures/Im3.png" alt="coach" />
            </div>
            <div className="home-sec5-coacheInfo">
              <FontAwesomeIcon icon={faAngleUp} />
              <h2>Anna June</h2>
              <p>Personal Trainer</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Section4
