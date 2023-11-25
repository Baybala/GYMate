import { Link } from 'react-router-dom'

const HeaderLogo = () => {
  // this.headerSectionLogo = headerSectionLogo
  // this.headerlogo = headerLogo

  return (
    <div className="header-section-logo">
      <Link className="header-logo" to="/Home"></Link>
    </div>
  )
}

export default HeaderLogo
