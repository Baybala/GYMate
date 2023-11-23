import { useState } from 'react'
import './Schedule.css'

const Schedule = () => {
  const buttonName = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const days = {
    Monday: [
      { class: 'Fitness', time: '9:00am - 10:00am', trainer: 'David Vila' },
      {
        class: 'Body Building',
        time: '10:00pm - 11:00pm',
        trainer: 'John Weights',
      },
      { class: 'Running', time: '4:00pm - 5:00pm', trainer: 'Junifor Jonas' },
      { class: 'Cycling', time: '6:00pm - 7:00pm', trainer: 'Robert Louis' },
    ],
    Tuesday: [
      { class: 'Boxing', time: '9:00am - 10:00am', trainer: 'Mike Tyson' },
      {
        class: 'Yoga',
        time: '10:00pm - 11:00pm',
        trainer: 'Mia Kha',
      },
      {
        class: 'Crossfit',
        time: '4:00pm - 5:00pm',
        trainer: 'Cristofer Columbo',
      },
    ],

    Wednesday: [
      { class: 'Cycling', time: '9:00am - 10:00am', trainer: 'Mario Vreco' },
      {
        class: 'Body Building',
        time: '10:00pm - 11:00pm',
        trainer: 'John Weights',
      },
      { class: 'Fitness', time: '4:00pm - 5:00pm', trainer: 'Tom Rizzly' },
      { class: 'Running', time: '6:00pm - 7:00pm', trainer: 'Michael Jonson' },
    ],

    Thursday: [
      { class: 'Fitness', time: '9:00am - 10:00am', trainer: 'David Vila' },
      {
        class: 'Body Building',
        time: '10:00pm - 11:00pm',
        trainer: 'John Weights',
      },
      { class: 'Running', time: '4:00pm - 5:00pm', trainer: 'Junifor Jonas' },
    ],

    Friday: [
      { class: 'Crossfit', time: '9:00am - 10:00am', trainer: 'Mike Mich' },
      {
        class: 'Karate',
        time: '10:00pm - 11:00pm',
        trainer: 'Junifor Jonas',
      },
      { class: 'Meditation', time: '4:00pm - 5:00pm', trainer: 'Lara Croft' },
      { class: 'Workout', time: '6:00pm - 7:00pm', trainer: 'Lary Wheels' },
    ],

    Saturday: [
      {
        class: 'Power Lifting',
        time: '9:00am - 10:00am',
        trainer: 'David Laid',
      },
      {
        class: 'Boxing',
        time: '10:00pm - 11:00pm',
        trainer: 'Tyson Fury',
      },
      { class: 'Yoga', time: '4:00pm - 5:00pm', trainer: 'Milica Tails' },
    ],

    Sunday: [
      { class: 'Fitness', time: '9:00am - 10:00am', trainer: 'David Vila' },
      {
        class: 'Body Building',
        time: '10:00pm - 11:00pm',
        trainer: 'John Weights',
      },
      { class: 'Running', time: '4:00pm - 5:00pm', trainer: 'Junifor Jonas' },
      { class: 'Cycling', time: '6:00pm - 7:00pm', trainer: 'Robert Louis' },
    ],
  }

  const [dataToDisplay, setDataToDisplay] = useState(days.Monday)
  const [activeDay, setActiveDay] = useState('Monday')

  const handleClick = (day) => {
    setDataToDisplay(days[day])
    setActiveDay(day)
  }

  return (
    <div className="schedule">
      <div className="classes-conatiner">
        <h1>
          <b>Schedule by Day</b>
        </h1>
        <div className="headButtons">
          {buttonName.map((name) => (
            <p
              className={`navButton ${activeDay === name && 'active'}`}
              key={name}
              onClick={() => handleClick(name)}
            >
              <b>{name}</b>
            </p>
          ))}
        </div>
        {dataToDisplay.map((item) => (
          <div className="item-container">
            <div className="class">
              <h5>Class Name</h5>
              <p>
                <b>{item.class}</b>
              </p>
            </div>
            <div className="time">
              <h5>{item.time}</h5>
              <p>
                <b>9:00am - 10:00am</b>
              </p>
            </div>
            <div className="trainer">
              <h5>Trainer</h5>
              <p>
                <b>{item.trainer}</b>
              </p>
            </div>
            <div className="join">
              <p>
                <b>Join Now</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
