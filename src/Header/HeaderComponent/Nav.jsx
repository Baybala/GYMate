import { Link } from 'react-router-dom'
import _ from 'lodash'

const Nav = ({ navPath }) => {
  return (
    <div className="header-section-nav">
      <nav className="header-nav">
        {navPath.map((item) => {
          return (
            <p key={item}>
              <Link to={item}>{item}</Link>
            </p>
          )
        })}
      </nav>
    </div>
  )
}

export default Nav
