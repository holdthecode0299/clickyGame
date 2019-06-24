import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"


// import logo from './logo.svg';
// import './App.css'

class App extends Component {

  state = {
    characters,
    clickedCharacters: [],
    score: 0
  };

  // Add on click association here to associate an image with a random number 0 or 1
  // Click on image....it gets taken out of Character array 
  imageClick = event => {
    const currentCharacter = event.target.alt;
    const alreadyClicked = this.state.clickedCharacters.indexOf(currentCharacter) > -1;
  
  // Game resets if double click occurs 
  if (alreadyClicked){
    this.setState({
      characters: this.state.characters.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedCharacters: [], 
      score:0
    });
    alert("Yikes. Try again")
  
    // If fish hasn't already been clicked score increases and cards reorganize
  } else {
    this.setState(
      {
        characters: this.state.characters.sort(function(a, b){
          return 0.5 - Math.random();
        }),
        clickedCharacters: this.state.clickedCharacters.concat(
          currentCharacter
        ),
        score: this.state.score + 1
      },
    )
  }
  }

  // Render CharacterCard component for each character component

  render () {
    return (
      <div>
        <Navbar
        score={this.state.score}
        />
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.characters.map(character => (
          <CharacterCard
          imageClick={this.imageClick}
          // number association 
          id={character.id}
          name={character.name}
          image={character.image}
          />
        ))}
      </Wrapper>
      </div>
    );
    }
}

export default App;



