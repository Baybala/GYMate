import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Section2 = () => {
  return (
    <section className="home-sec2">
      <div className="home-sec2-container">
        <div className="home-sec2-head">
          <div className="home-sec2-progression">
            <img src="./icon/progression.png" alt="box_img" />
            <h2>PROGRESSION</h2>
            <p>
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>
          <div className="home-sec2-workout">
            <img src="./icon/workout.png" alt="box_img" />
            <h2>WORKOUT</h2>
            <p>
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
          <div className="home-sec2-nutritions">
            <img src="./icon/nutrition.png" alt="box_img" />
            <h2>NUTRITIONS</h2>
            <p>
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>
        <div className="home-sec2-body">
          <div className="home-sec2-body-part1">
            <h3>WHO WE ARE</h3>
            <img src="./titlebx.svg" alt="titlebx" />
            <h1>Take Your Health And Body To Next Level</h1>
            <p>
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="home-sec2-body-part1-TEM">
              <div className="home-sec2-body-part1-TEM-TRAINERS">
                <img src="./icon/trainers.png" alt="trainers_icon" />
                <h3>
                  PROFESSIONAL
                  <br />
                  TRAINERS
                </h3>
              </div>
              <div className="home-sec2-body-part1-TEM-EQUIPMENTS">
                <img src="./icon/equpments.png" alt="trainers_icon" />
                <h3>
                  MODERN
                  <br />
                  EQUIPMENTS
                </h3>
              </div>
              <div className="home-sec2-body-part1-TEM-MACHINES">
                <img src="./icon/machines.png" alt="trainers_icon" />
                <h3>
                  FANCY GYM
                  <br />
                  MACHINES
                </h3>
              </div>
            </div>
            <p className="home-sec2-body-part1-btn">
              TAKE A TOUR
              <FontAwesomeIcon
                style={{ paddingLeft: '8px' }}
                icon={faArrowRightLong}
              />
            </p>
          </div>
          <div className="home-sec2-body-part2">
            <img
              className="home-sec2-body-part2-img1"
              src="./pictures/running.png"
              alt="running_pc"
            />
            <img
              className="home-sec2-body-part2-img2"
              src="./pictures/runningGirl.png"
              alt="runningGirl-pc"
            />
            <img
              className="home-sec2-body-part2-img3"
              src="./pictures/oval.svg"
              alt="oval-pc"
            />
            <img
              className="home-sec2-body-part2-img4"
              src="./pictures/wind.png"
              alt="wind-pc"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
