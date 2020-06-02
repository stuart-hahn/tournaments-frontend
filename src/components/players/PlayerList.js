import React from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../../actions";
import Player from "./Player";

class PlayerList extends React.Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div className='ui relaxed list'>
        {this.props.players.map((player) => (
          <Player key={player.id} name={player.name} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.playersData.players,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlayers: () => dispatch(fetchPlayers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
