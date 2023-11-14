import { useEffect } from 'react'
import './About.css'

const About = () => {
  useEffect(() => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })

  return <div className="about" id="about"></div>
}

export default About
