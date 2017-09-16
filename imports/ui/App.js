import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar';

export default class App extends Component {
  render() {
    let { title, players } = this.props;
    return (
      <div>
        <TitleBar title={title} subtitle='Created by Ross Sheppard'/>
        <div className='wrapper'>
          <PlayerList players={players}/>
          <AddPlayer />
        </div>
      </div>
    )
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  players: PropTypes.array.isRequired,
}
