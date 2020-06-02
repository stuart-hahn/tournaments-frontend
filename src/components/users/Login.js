import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { userLoginFetch } from "../../actions";

class HomePage extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userLoginFetch(this.state);
  };

  render() {
    if (this.props.isSignedIn === true) {
      return <Redirect to='/players' />;
    }
    return (
      <div className='ui placeholder segment'>
        <div className='ui two column very relaxed stackable grid'>
          <div className='column'>
            <form
              onSubmit={this.handleSubmit}
              autoComplete='off'
              className='ui form'
            >
              <div className='field'>
                <label>Username</label>
                <div className='ui left icon input'>
                  <input
                    name='username'
                    onChange={this.handleChange}
                    value={this.state.username}
                    type='text'
                    placeholder='Username...'
                  />
                  <i className='user icon'></i>
                </div>
              </div>
              <div className='field'>
                <label>Email</label>
                <div className='ui left icon input'>
                  <input
                    name='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    type='text'
                    placeholder='Email...'
                  />
                  <i className='envelope icon'></i>
                </div>
              </div>
              <div className='field'>
                <label>Password</label>
                <div className='ui left icon input'>
                  <input
                    onChange={this.handleChange}
                    name='password'
                    placeholder='Password...'
                    value={this.state.password}
                    type='password'
                  />
                  <i className='lock icon'></i>
                </div>
              </div>
              <button className='ui blue button'>Log In</button>
            </form>
          </div>
          <div className='middle aligned column'>
            <Link className='ui big button' to='/signup'>
              <i className='signup icon'></i>
              Sign Up
            </Link>
          </div>
        </div>
        <div className='ui vertical divider'>Or</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

const mapDispatchToProps = (dispatch) => ({
  userLoginFetch: (formValues) => dispatch(userLoginFetch(formValues)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
