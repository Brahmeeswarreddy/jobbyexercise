import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogoutBtn = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="container">
      <div>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="image"
          />
        </Link>
      </div>

      <ul className="headingContainer">
        <Link to="/">
          <li className="heading">Home</li>
        </Link>
        <Link to="/jobs">
          <li className="heading">Jobs</li>
        </Link>
      </ul>
      <div>
        <button className="button" type="button" onClick={onClickLogoutBtn}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
