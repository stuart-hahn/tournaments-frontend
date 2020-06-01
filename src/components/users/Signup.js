import React from "react";
import { connect } from "react-redux";
import { userPostFetch } from "../../actions";

class Signup extends React.Component {
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
    this.props.userPostFetch(this.state);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='ui form error'
        autoComplete='off'
      >
        <div className='field'>
          <label>Username</label>
          <input
            name='username'
            placeholder='Username...'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            name='email'
            placeholder='Email...'
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className='field'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Password...'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button className='ui primary button'>Log In</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userPostFetch: (formValues) => dispatch(userPostFetch(formValues)),
});

export default connect(null, mapDispatchToProps)(Signup);
