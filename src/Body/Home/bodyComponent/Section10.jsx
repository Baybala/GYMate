import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Section10 = () => {
  const blogBox = (h4Text, h2Text, pText) => {
    return (
      <div>
        <h4>{h4Text}</h4>
        <h2>{h2Text}</h2>
        <p className="home-sec10-infoText">{pText}</p>
        <Link to="/Blog" style={{ textDecoration: 'none' }}>
          <p className="home-sec10-btn">
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
    )
  }

  return (
    <section className="home-sec10">
      <div className="home-sec10-container">
        <img src="./titlebx.svg" alt="titlebx" />
        <h4 className="home-sec10-headText_blog">LATEST BLOG</h4>
        <h1>
          <b>Our Recent News</b>
        </h1>
        <p>
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
        <div className="home-sec10-blogBoxes">
          {blogBox(
            '22.03.2022',
            'Yoga For Everyone in 2023',
            'This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds',
          )}
          {blogBox(
            '13.09.2022',
            'Getting Back Into CrossFit After Vacation',
            'Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.',
          )}
          {blogBox(
            '28.06.2022',
            'Meet Fitness Ambassador Grace',
            'Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.',
          )}
        </div>
      </div>
    </section>
  )
}

export default Section10
