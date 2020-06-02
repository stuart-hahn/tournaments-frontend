import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import PlayerList from "./players/PlayerList";
import Login from "./users/Login";
import Signup from "./users/Signup";
import { getProfileFetch } from "../actions";
import TournamentListContainer from "./tournaments/TournamentListContainer";

class App extends React.Component {
  componentDidMount = () => {
    this.props.getProfileFetch();
  };
  render() {
    return (
      <div className='ui container'>
        <Header />
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/tournaments' component={TournamentListContainer} />
          <Route path='/players' component={PlayerList} />
          <Route path='/' component={TournamentListContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
});

export default connect(null, mapDispatchToProps)(App);
