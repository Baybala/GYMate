import { useEffect } from 'react'
import './Pricing.css'
import Section9 from '../Home/bodyComponent/Section9'

const Pricing = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  return (
    <div className="pricing">
      <h1 className="pricing-header">
        <b>Pricing</b>
      </h1>
      {/* This section is the same as used in the Home tab */}
      <Section9 />
    </div>
  )
}

export default Pricing
