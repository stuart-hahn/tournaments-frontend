import React from "react";
import { connect } from "react-redux";

import TournamentList from "./TournamentList";

class TournamentListContainer extends React.Component {
  render() {
    console.log(this.props.tournaments);
    return <TournamentList tournaments={this.props.tournaments} />;
  }
}

const mapStateToProps = (state) => ({
  tournaments: state.tournaments,
});

export default connect(mapStateToProps)(TournamentListContainer);
