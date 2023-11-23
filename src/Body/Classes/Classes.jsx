import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faClock,
  faArrowRightLong,
} from '@fortawesome/free-solid-svg-icons'
import './Classes.css'
import { Link } from 'react-router-dom'

const Classes = () => {
  const galleryData = [
    {
      picURL: './pictures/cycling.jpg',
      header: 'Cycling',
      trainer: 'Dorian Yate',
      time: 'Wed: 9:00 am',
    },
    {
      picURL: './pictures/GalleryBG5.jpeg',
      header: 'Meditation',
      trainer: 'Maria Mich',
      time: 'Fri: 1:00 pm',
    },
    {
      picURL: './pictures/martialArts.jpg',
      header: 'Boxing',
      trainer: 'John Flex',
      time: 'Tue: 4:00 pm',
    },
    {
      picURL: './pictures/karate.jpg',
      header: 'Karate',
      trainer: 'David Rich',
      time: 'Sat: 9:00 am',
    },
    {
      picURL: './pictures/historyPic1.jpg',
      header: 'Power Lifting',
      trainer: 'Larry Wheels',
      time: 'Mon: 8:00 pm',
    },
    {
      picURL: './pictures/workout.jpg',
      header: 'Workout',
      trainer: 'Shawn Ray',
      time: 'Sun: 10:00 am',
    },
    {
      picURL: './pictures/Crossfit.jpg',
      header: 'Crossfit',
      trainer: 'Jenifer Alex',
      time: 'Wen: 9:00 pm',
    },
    {
      picURL: './pictures/Running.jpg',
      header: 'Running',
      trainer: 'Zinia Zessy',
      time: 'Fri: 6:00 am',
    },
    {
      picURL: './pictures/BodyBuilding.jpg',
      header: 'Body Building',
      trainer: 'Jake Paul',
      time: 'Mon: 8:00 pm',
    },
    {
      picURL: './pictures/mma.jpg',
      header: 'MMA',
      trainer: 'Becky Lynch',
      time: 'Fri: 6:00 am',
    },
    {
      picURL: './pictures/yoga.jpg',
      header: 'Yoga',
      trainer: 'Marta Mich',
      time: 'Wen: 8:00 am',
    },
    {
      picURL: './pictures/Fitness.jpg',
      header: 'Fitness',
      trainer: 'Mia Malkova',
      time: 'Sun: 5:00 pm',
    },
  ]

  const [numberOfItemsToShow, setNumberOfItemsToShow] = useState(6)
  const [buttonName, setButtonName] = useState('Show More')

  const showMoreItems = () => {
    if (numberOfItemsToShow === 6) {
      setNumberOfItemsToShow(12)
      setButtonName('Show Less')
    }
    if (numberOfItemsToShow === 12) {
      setNumberOfItemsToShow(6)
      setButtonName('Show More')
    }
  }

  console.log(numberOfItemsToShow)

  const galleryItem = (picURL, header, trainer, time) => {
    return (
      <div className="classItem" style={{ backgroundImage: `url(${picURL})` }}>
        <div>
          <h2>
            <b>{header}</b>
          </h2>
          <div>
            <p>
              <FontAwesomeIcon icon={faUser} /> {trainer}{' '}
            </p>
            <p className="classTime">
              <FontAwesomeIcon icon={faClock} /> {time}
            </p>
          </div>
          <Link to="/Contact">
            <button className="joinButton">
              JOIN NOW{' '}
              <FontAwesomeIcon
                style={{ paddingLeft: '8px' }}
                icon={faArrowRightLong}
              />
            </button>
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="classes" id="classes">
      <h1>
        <b>Classes</b>
      </h1>
      <div className="classes-container">
        <div className="gridContainer">
          {galleryData
            .splice(0, numberOfItemsToShow)
            .map((item) =>
              galleryItem(item.picURL, item.header, item.trainer, item.time),
            )}
        </div>
        <button className="showMoreBtn" onClick={showMoreItems}>
          {buttonName}
        </button>
      </div>
    </div>
  )
}

export default Classes
