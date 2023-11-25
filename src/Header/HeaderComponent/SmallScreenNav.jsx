import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'

const SmallScreenNav = ({ navPath, menuBarClick }) => {
  return (
    <div className="smallScreen-section-nav-open">
      <div className="smallScreen-nav-close" onClick={menuBarClick}>
        <FontAwesomeIcon icon={faRectangleXmark} />
      </div>
      <nav className="smallScreen-nav">
        {navPath.map((item) => {
          return (
            <p key={item} onClick={menuBarClick}>
              <Link to={item}>{item}</Link>
            </p>
          )
        })}
      </nav>
    </div>
  )
}

export default SmallScreenNav
