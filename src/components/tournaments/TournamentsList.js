import React from "react";
import { connect } from "react-redux";
import { fetchTournaments } from "../../actions";

import Tournament from "./Tournament";

class TournamentsList extends React.Component {
  componentDidMount() {
    this.props.fetchTournaments();
  }

  // renderTournaments = () => {
  //   return this.props.tournaments.map((tournament) => {
  //     return <Tournament key={tournament.id} name={tournament.name} />;
  //   });
  // };

  render() {
    // return <div>{this.renderTournaments()}</div>;
    return (
      <div className='ui relaxed list'>
        {this.props.tournaments.map((tournament) => (
          <Tournament key={tournament.id} name={tournament.name} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchTournaments: () => dispatch(fetchTournaments()) };
};

const mapStateToProps = (state) => ({
  tournaments: state.tournamentsData.tournaments,
  requesting: state.requesting,
});

export default connect(mapStateToProps, mapDispatchToProps)(TournamentsList);
