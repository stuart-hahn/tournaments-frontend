import React from "react";
import { connect } from "react-redux";
import { fetchTournaments } from "../../actions";

import TournamentList from "./Tournament";

class TournamentsList extends React.Component {
  componentDidMount() {
    this.props.fetchTournaments();
  }

  renderTournaments = () => {
    return this.props.tournaments.tournaments.map((tournament) => {
      return <TournamentList key={tournament.id} name={tournament.name} />;
    });
  };

  render() {
    return <div>{this.renderTournaments()}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchTournaments: () => dispatch(fetchTournaments()) };
};

const mapStateToProps = (state) => ({
  tournaments: state.tournaments,
  requesting: state.requesting,
});

export default connect(mapStateToProps, mapDispatchToProps)(TournamentsList);
