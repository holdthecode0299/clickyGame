import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"
// import logo from './logo.svg';
import './App.css'

class App extends Component {

  state = {
    characters
  };

  // Add on click association here to associate an image with a random number 0 or 1

  // Render CharacterCard component for each character component

  render () {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.characters.map(character => (
          <CharacterCard
          // number association 
          id={character.id}
          name={character.name}
          />
        ))}
      </Wrapper>
    );
    }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


