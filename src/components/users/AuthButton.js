import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "../../actions";

class authButton extends React.Component {
  onLogoutClick = () => {
    this.props.logoutUser();
    localStorage.removeItem("token");
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onLogoutClick} className='ui red button'>
          Log Out
        </button>
      );
    } else {
      return (
        <Link to='/login' className='ui green button'>
          Log In
        </Link>
      );
    }
  };
  render() {
    return <div className='item'>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { logoutUser })(authButton);
