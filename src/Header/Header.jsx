import './Header.css'
import HeaderLogo from './HeaderComponent/HeaderLogo'
import { useState, useEffect } from 'react'
import Nav from './HeaderComponent/Nav'
import SignInUP from './HeaderComponent/SignInUp'
import SideChart from './HeaderComponent/SideChart'
import SmallScreenNav from './HeaderComponent/SmallScreenNav'

const Header = () => {
  const navPath = [
    'Home',
    'About',
    'Gallery',
    'Schedule',
    'Blog',
    'Pricing',
    'Classes',
    'Contact',
  ]

  const [scrollPosition, setScrollPosition] = useState(0)

  const [sideChartOn, setSideCHartOn] = useState(false)

  const [menuBar, setMenuBar] = useState(false)

  useEffect(() => {
    const setingTheSize = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
    }

    window.addEventListener('scroll', setingTheSize)

    return () => {
      window.removeEventListener('scroll', setingTheSize)
    }
  })

  return (
    <header className={scrollPosition > 0 ? 'header' : 'header-up'}>
      <HeaderLogo />
      <Nav navPath={navPath} />
      <SignInUP
        sideChartClick={() => setSideCHartOn((prevValue) => !prevValue)}
        menuBarClick={() => setMenuBar((prevValue) => !prevValue)}
      />
      <SideChart
        sideChartOn={sideChartOn}
        sideChartClick={() => setSideCHartOn((prevValue) => !prevValue)}
      />
      {menuBar && (
        <SmallScreenNav
          navPath={navPath}
          menuBarClick={() => setMenuBar((prevValue) => !prevValue)}
        />
      )}
    </header>
  )
}

export default Header
