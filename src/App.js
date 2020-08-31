import React from 'react';
import Button from '@material-ui/core/Button';
import SelectAllIcon from '@material-ui/icons/SelectAll';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import GameCardList from './Components/GameCardList';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import withStyles from '@material-ui/styles/withStyles';
import './App.css';
import { motion } from "framer-motion"

const CustomTextField = withStyles({
  root: {
    '& label': {
      color: '#eeeeee'
    },
    '& label.Mui-focused': {
      color: '#eeeeee',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#eeeeee',
      },
      '&:hover fieldset': {
        borderColor: '#757575',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#757575',
      },
    },
  },
})(TextField);

const largeButtonStyle = {
  textTransform: 'capitalize', 
  float: 'right', 
  fontFamily: 'Oswald', 
  color: '#eeeeee'
}

const playButtonStyle = {
  textTransform: 'capitalize', 
  fontFamily: 'Oswald', 
  color: '#eeeeee',
  width: '100%',
  fontSize: '4vh'
}

class App extends React.Component {
  state = {
    games: this.props.games,
    selection: '',
    currentName: ''
  }

  handleTextFieldChange = event => {
    this.setState({
      currentName: event.target.value
    })
  }

  addNewGame() { 
    if (this.state.currentName !== '') {
      const last = this.state.games[this.state.games.length - 1];
      const id = last.id + 1;

      const newGame = {
        id: id,
        title: this.state.currentName,
        selected: false
      }

      var games = Array.from(this.state.games);
      games.push(newGame);

      this.setState({
        games: games,
        currentName: ''
      });
    }
  }

  updateGameState = id => {
    var games = Array.from(this.state.games);
    games[id].selected = !games[id].selected;

    this.setState({
      games: games
    })
  }

  selectAllGames() {
    var games = this.state.games;
    games.forEach(game => { game.selected = true });

    this.setState({
      games: games
    })
  }

  selectRandomGame() {
    var selectedGames = [];

    this.state.games.forEach(game => {
      if (game.selected) {
        selectedGames.push(game);
      }
    });
    
    const i = Math.floor(Math.random() * selectedGames.length);
    const selection = selectedGames[i] || "Select at least one game";

    this.setState ({
      selection: selection.title
    });
  }

  render() {
    return (
      <div className="App">
        <motion.h1 
          drag="x"
          dragConstraints={{ left: -10, right: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
        >
          Random Game Pick
        </motion.h1>
        <div className="box">
          <h2>All Games</h2>
          <Button
            color="inherit"
            variant="outlined"
            startIcon={ <SelectAllIcon /> }
            style={ largeButtonStyle }
            onClick={ () => this.selectAllGames() }
          >
            Select All
          </Button>
        </div>
        <GameCardList 
          games={ this.state.games } 
          updateGameState={ this.updateGameState }
        />
        <div className="form">
          <CustomTextField onChange={ this.handleTextFieldChange }
            variant="outlined"
            label="Name"
            value={ this.state.currentName }
            style={{ margin: '0px 30px 0px 0px' }}
            InputProps={{
              style: {
                  color: "#eeeeee"
              }
            }}
          />
          <Button
            color="inherit"
            variant="outlined"
            startIcon={ <AddIcon /> }
            style={ largeButtonStyle }
            onClick={ () => this.addNewGame() }
            size="large"
          >
            Add New Game
          </Button>
        </div>
        <div className="results">
          <Button
            color="inherit"
            variant="outlined"
            startIcon={ <SportsEsportsIcon style={{fontSize: '4vh', marginRight: '20px'}} /> }
            style={ playButtonStyle }
            onClick={ () => { this.selectRandomGame() } }
          >
            Let's go with ...
          </Button>
          <h3 className="selection">{ this.state.selection }</h3>
        </div>
      </div>
    );
  }
}

export default App;
