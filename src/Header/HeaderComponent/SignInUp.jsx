import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faChartBar,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

const SignInUP = ({ sideChartClick, menuBarClick }) => {
  return (
    <div className="header-section-authorization">
      <div className="header-authorization">
        <div className="header-menuBar-button" onClick={menuBarClick}>
          <p>
            <FontAwesomeIcon icon={faBars} />
          </p>
        </div>
        <div className="header-signUp-button">
          <p>
            <FontAwesomeIcon icon={faUserPlus} />
          </p>
        </div>
        <div className="header-chartBar-button">
          <p onClick={sideChartClick}>
            <FontAwesomeIcon icon={faChartBar} />
          </p>
        </div>
        <div className="header-joinClassNow-button">
          <div>
            <b>+</b>
          </div>
          <p>JOIN CLASS NOW</p>
        </div>
      </div>
    </div>
  )
}

export default SignInUP
