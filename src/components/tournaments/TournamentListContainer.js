import React from "react";
import { connect } from "react-redux";
import { fetchTournaments } from "../../actions";

import TournamentList from "./TournamentList";

class TournamentListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchTournaments();
  }

  renderTournaments = () => {
    return this.props.tournaments.tournaments.map((tournament) => {
      return <TournamentList key={tournament.id} name={tournament.name} />;
    });
  };

  render() {
    console.log(this.props);
    return <div>{this.renderTournaments()}</div>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchTournaments: () => dispatch(fetchTournaments()) };
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    tournaments: state.tournaments,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentListContainer);
