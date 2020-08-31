import React from 'react';
import GameCard from './GameCard'; 
import './Styles/GameCardList.css';

class GameCardList extends React.Component {
  handleUpdateGameState = id => {
    this.props.updateGameState(id);
  }

  render() {
    return(
      <div className="GameCardList">
        { this.props.games.map(game => (
            <GameCard key={ game.id } game={ game } updateGameState={ this.handleUpdateGameState } />
        ))}
      </div>
    );
  }
}

export default GameCardList;