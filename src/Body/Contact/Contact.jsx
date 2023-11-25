import { useEffect } from 'react'
import './Contact.css'

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  const contactDetail = (head, content1, content2) => {
    return (
      <div>
        <h3 className="contactHeader">
          <b>{head}</b>
        </h3>
        <p>
          {content1}
          <br />
          {content2}
        </p>
      </div>
    )
  }

  return (
    <div className="contact" id="contact">
      <h1>
        <b>Contact</b>
      </h1>
      <div className="contact-container">
        <div className="generalInfo">
          <h1>
            <b>We are here for help you! To Shape Your Body.</b>
          </h1>
          <p>
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div className="contactData">
            {contactDetail(
              'New York City, USA',
              '85 Briston Mint Street,',
              'London, E1 8LG, USA',
            )}
            {contactDetail(
              'Opening Hours',
              'Mon to Fri: 7:30 am — 5:00 am',
              'Sat: 7:30 am — 1:00 am',
            )}
            {contactDetail(
              'Information',
              '+994514217374',
              'rustamov.b@hotmail.com',
            )}
            <div>
              <h3 className="contactHeader">
                <b>Follow Us On</b>
              </h3>
              <div>
                <img
                  style={{ cursor: 'pointer' }}
                  src="./icon/facebook.png"
                  alt="facebook icon"
                />
                <img
                  style={{ cursor: 'pointer', marginLeft: '7px' }}
                  src="./icon/twitter.png"
                  alt="twitter icon"
                />
                <img
                  style={{ cursor: 'pointer', marginLeft: '7px' }}
                  src="./icon/instagram.png"
                  alt="instagram icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="submitForm">
          <form className="form">
            <h2 className="contactHeader">
              <b>Leave Us Your Info</b>
            </h2>
            <input placeholder="Full Name *" type="text" />
            <input placeholder="Email Address *" type="email" />
            <select>
              <option value="australia">Select Class</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <textarea placeholder="Comment..." type="text" />
            <button className="submmitTheComment">
              <b>SUBMIT NOW</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
