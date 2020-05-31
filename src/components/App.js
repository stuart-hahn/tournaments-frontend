import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TournamentList from "./tournaments/TournamentList";
import Header from "./Header";
import PlayerList from "./players/PlayerList";
import loginUserForm from "./users/loginUserForm";

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={TournamentList} />
        <Route exact path='/login' component={loginUserForm} />
        <Route exact path='/tournaments' component={TournamentList} />
        <Route exact path='/players' component={PlayerList} />
      </BrowserRouter>
    </div>
  );
};

export default App;
