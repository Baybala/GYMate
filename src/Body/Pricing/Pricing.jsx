import { useEffect } from 'react'
import './Pricing.css'

const Pricing = () => {
  useEffect(() => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
  return <div className="pricing" id="pricing"></div>
}

export default Pricing
