import { useEffect } from 'react'
import './Classes.css'

const Classes = () => {
  useEffect(() => {
    const element = document.getElementById('classes')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
  return <div className="classes" id="classes"></div>
}

export default Classes
