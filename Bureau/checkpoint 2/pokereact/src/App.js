import React, { Component } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";

class App extends Component {
state = {
      pkmn: ["I'm coming..."],
      pages: 0,
      nbOfCardsDisplayed: 20,
      checkPreviousPage: true,
      checkNextPage: false
    };
    handlePreviousPage = this.handlePreviousPage.bind(this);
    handleNextPage = this.handleNextPage.bind(this);
  
  componentDidMount() {
    fetch("https://api.pokemontcg.io/v1/cards?subtype=Basic&supertype=Pokémon")
      .then(response => response.json())
      .then(data => {
        this.setState({ pkmn: data.cards });
        console.log("API says:");
        console.log(data.cards);
      });
  }
  handlePreviousPage() {
    this.state.pages - (this.state.nbOfCardsDisplayed * 2) <= 0
      ? this.setState({
          pages: this.state.pages - this.state.nbOfCardsDisplayed,
          checkPreviousPage: true
        })
      : this.setState({
          pages: this.state.pages - this.state.nbOfCardsDisplayed,
          checkNextPage: false
        });
  }
  handleNextPage() {
    this.state.pages + (this.state.nbOfCardsDisplayed * 2) >=
    this.state.pkmn.length
      ? this.setState({
          pages: this.state.pages + this.state.nbOfCardsDisplayed,
          checkNextPage: true
        })
      : this.setState({
          pages: this.state.pages + this.state.nbOfCardsDisplayed,
          checkPreviousPage: false
        });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PokemonList
            pkmnList={this.state.pkmn.slice(
              this.state.pages,
              this.state.pages + this.state.nbOfCardsDisplayed
            )}
            fullPkmnList={this.state.pkmn}
            nbOfCardsDisplayed={this.state.nbOfCardsDisplayed}
            checkPreviousPage={this.state.checkPreviousPage}
            checkNextPage={this.state.checkNextPage}
            handlePreviousPage={this.handlePreviousPage}
            handleNextPage={this.handleNextPage}
          />
        </header>
      </div>
    );
  }
}

export default App;