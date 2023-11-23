import { Outlet } from 'react-router-dom'
import './BodyHeaderLayout.css'
import { useEffect } from 'react'

const BodyheaderLayout = () => {
  useEffect(() => {
    const element = document.getElementById('headerLink')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
  return (
    <div id="headerLink">
      <div className="body-header-layout"></div>
      <Outlet />
    </div>
  )
}

export default BodyheaderLayout
