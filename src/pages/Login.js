import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/login.scss'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

class LoginPage extends React.Component{
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor(props) {
    super(props);
  
    this.state = {
      email: '',
      password: ''
    }  
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.email)
    // console.log(this.state.password)
    axios
      .post('http://localhost:5000/api/pos/auth/signin', {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        // localStorage.setIte
        this.props.history.push('/')
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div className="login">
        <div className="title">
          <h1>Login Page</h1>
        </div>
        <div className="column is-6 is-login">
          <form className="card card-auth" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange(e)} required />
                <span className="icon is-small is-left">
                  <FaEnvelope />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange(e)} required />
                <span className="icon is-small is-left">
                  <FaLock />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success" type="submit">
                  Login
                </button>
                <Link to="/auth/register"><u>Not have account? Register</u></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginPage)