import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { motion } from "framer-motion"
import './Styles/GameCard.css';

const checkboxStyles = {
  borderRadius: 0
}

class GameCard extends React.Component {
  handleUpdateState = event => {
    this.props.updateGameState(event.target.value);
  }

  render() {
    return(
      <motion.div 
        drag="x"
        dragConstraints={{ left: -10, right: 10 }}
        whileHover={{ scale: 0.9 }}
        className="GameCard"
      >
        <Checkbox
          checked={ this.props.game.selected }
          icon={ <CheckBoxOutlineBlankIcon style={{ color: '#eeeeee' }} /> }
          checkedIcon={ <FavoriteIcon /> }
          style={checkboxStyles}
          value={ this.props.game.id }
          onClick={ this.handleUpdateState }
        />
        <p>{ this.props.game.title }</p>
      </motion.div>
    );
  }
}

export default GameCard;