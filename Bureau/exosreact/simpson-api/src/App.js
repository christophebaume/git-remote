import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpsonsQuote from "./components/SimpsonsQuote"
import DisplayQuote from "./components/DisplayQuote"

class App extends Component {
  state = {
    quote: [{}]
  }

  componentDidMount(){
    this.getQuote()
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response => response.json())
    .then(data => {
     // console.log(data);
      
      this.setState({
        quote: data[0]
      })
      
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn The Simpsons quote
          </a>
        </header>
        <SimpsonsQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
