import Section1 from './bodyComponent/Section1'
import Section2 from './bodyComponent/Section2'
import Section3 from './bodyComponent/Section3'
import Section4 from './bodyComponent/Section4'
import Section5 from './bodyComponent/Section5'
import Section6 from './bodyComponent/Section6'
import Section7 from './bodyComponent/Section7'
import Section8 from './bodyComponent/Section8'
import Section9 from './bodyComponent/Section9'
import Section10 from './bodyComponent/Section10'
import Section11 from './bodyComponent/Section11'
import './Home.css'
import { useEffect } from 'react'

const Body = () => {
  useEffect(() => {
    const element = document.getElementById('home')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
  return (
    <div className="home" id="home">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </div>
  )
}

export default Body
