import {Component} from 'react'
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Loginform extends Component {
  state = {
    username: '',
    password: '',
    errorShow: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      errorShow: true,
      errorMsg,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {errorShow, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="bgContainer">
        <div className="formContainer">
          <form onSubmit={this.onSubmitForm}>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
                className="image"
                alt="website logo"
              />
              <div className="inputContainer">
                <label className="label" htmlFor="username">
                  Username
                </label>
                <input
                  className="input"
                  id="username"
                  type="text"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="inputContainer">
                <label className="label" htmlFor="password">
                  password
                </label>
                <input
                  className="input"
                  id="password"
                  type="password"
                  onChange={this.onChangePassword}
                />
              </div>
              <button className="button" type="submit">
                Login
              </button>
              {errorShow && <p>{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Loginform
