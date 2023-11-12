import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Section9 = () => {
  const boxContent = (price, box) => {
    return (
      <div className="home-sec9-priceBox">
        <div className={`home-sec9-imageBox ${box}`}></div>
        <div className="home-sec9-infoBox">
          <p className="home-sec9-price">
            <b>{price}</b>
          </p>
          <p className="home-sec9-p">Free Hand</p>
          <p className="home-sec9-p">Gym Fitness</p>
          <p className="home-sec9-p">Weight Loss</p>
          <p className="home-sec9-p">Personal Trainer</p>
          <p className="home-sec9-p">Cycling</p>
          <p className="home-sec9-btn">
            <b>
              TAKE A TOUR
              <FontAwesomeIcon
                style={{ paddingLeft: '8px' }}
                icon={faArrowRightLong}
              />
            </b>
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="home-sec9">
      <img src="./titlebx.svg" alt="titlebx" />
      <h4 className="home-sec9-headText_pricing">GYMATE GALLERY</h4>
      <h1>Exclusive Pricing Plan</h1>
      <p>
        Gymat an unknown printer took a galley of type and scrambled make a type
        specimen book.
      </p>
      <div className="home-sec9-priceBoxes">
        {boxContent(39, 'box1')}
        {boxContent(65, 'box2')}
        {boxContent(100, 'box3')}
      </div>
    </div>
  )
}

export default Section9
