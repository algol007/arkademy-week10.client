import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/register.scss'
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Register extends React.Component {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
  
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.name)
    // console.log(this.state.email)
    // console.log(this.state.password)
    // console.log(this.state.password2)

    axios
      .post('http://localhost:5000/api/pos/auth/signup', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        // localStorage.setIte
        this.props.history.push('/auth/login')
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div className="register">
        <div className="title">
          <h1>Register</h1>
        </div>
        <div className="column is-6 is-login">
          <form className="card card-auth" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Fullname" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} required />
                <span className="icon is-small is-left">
                  <FaUserAlt />
                </span>
                {/* <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span> */}
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} required />
                <span className="icon is-small is-left">
                  <FaEnvelope />
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} required />
                <span className="icon is-small is-left">
                  <FaLock />
                </span>
              </p>
            {/* <span className="error-message">Error</span> */}
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Repeat Password" name="password2" value={this.state.password2} onChange={(e) => this.handleChange(e)} required />
                <span className="icon is-small is-left">
                  <FaLock />
                </span>
              </p>
            {/* <span className="error-message">Error</span> */}
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Register
                </button>
                <Link to="/auth/login"><u>Have an account? Login</u></Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Register)