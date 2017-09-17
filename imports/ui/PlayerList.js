import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './Player';

export default class PlayerList extends Component {
  renderPlayers() {
    let { players } = this.props;
    if ( players.length === 0 ) {
      return <div className='item'>
        <p className='item__message'>Add Player 1 to get started</p>
      </div>
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player} />;
      });
    }
  }
  render() {
    return <FlipMove maintainContainerHeight={true}>
      {this.renderPlayers()}
    </FlipMove>;
  }
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
