import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import TournamentList from "./tournaments/TournamentList";
import Header from "./Header";
import PlayerList from "./players/PlayerList";
import Login from "./users/Login";
import Signup from "./users/Signup";
import { getProfileFetch } from "../actions";

class App extends React.Component {
  componentDidMount = () => {
    this.props.getProfileFetch();
  };
  render() {
    return (
      <div className='ui container'>
        <BrowserRouter>
          <Header />
          <Route exact path='/' component={TournamentList} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/tournaments' component={TournamentList} />
          <Route exact path='/players' component={PlayerList} />
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
});

export default connect(null, mapDispatchToProps)(App);
