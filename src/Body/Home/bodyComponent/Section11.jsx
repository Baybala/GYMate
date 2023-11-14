import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Section11 = () => {
  return (
    <section className="home-sec11">
      <div className="home-sec11-container">
        <h1>
          <b>Need a Fitness Trainer?</b>
        </h1>
        <h2>
          <b>
            <span style={{ color: 'red' }}>Call: </span>+994514217374
          </b>
        </h2>
        <p className="home-sec11-btn">
          <b>
            TAKE A TOUR
            <FontAwesomeIcon
              style={{ paddingLeft: '8px' }}
              icon={faArrowRightLong}
            />
          </b>
        </p>
      </div>
    </section>
  )
}

export default Section11
