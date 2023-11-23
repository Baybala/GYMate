import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowLeftLong,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons'

const Section6 = () => {
  return (
    <section className="home-sec6">
      <div className="home-sec6-container">
        <img src="./titlebx.svg" alt="titlebx" />
        <h4 className="home-sec6-headText_testimonal">TESTIMONIALS</h4>
        <div className="home-sec6-body-frame">
          <img src="./pictures/TestimonialBG1.jpg" alt="spotGirl" />
          <div className="home-sec6-body-mainInfo">
            <img src="./pictures/TestimonialBG2.png" alt="quotationMark" />
            <p>
              “I've been a member of Gymate for the past 6 months and it has
              been an amazing experience. The trainers are knowledgeable and
              supportive, the equipment is top-notch, and the community of
              members is friendly and encouraging.”
            </p>
            <h3>Harry Potter</h3>
            <h5>CEO of Hogwarts</h5>
            <div className="home-sec6-body-mainInfo-arrow">
              <div>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRightLong} />
              </div>
            </div>
          </div>
          <div className="home-sec6-body-partners">
            <img src="./pictures/TestimonialBG4.png" alt="part1" />
            <img src="./pictures/TestimonialBG5.png" alt="part2" />
            <img src="./pictures/TestimonialBG6.png" alt="part3" />
            <img src="./pictures/TestimonialBG7.png" alt="part4" />
            <img src="./pictures/TestimonialBG8.png" alt="part5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section6
