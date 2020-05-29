import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import TournamentList from "./tournaments/TournamentList";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={TournamentList} />
    </BrowserRouter>
  );
};

export default App;
