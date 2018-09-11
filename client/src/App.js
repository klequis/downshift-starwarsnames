import React, { Component } from 'react';
import './App.css';
import StarwarsForm from './StarwarsForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Downshift Star Wars Characters</h1>
        </header>
        <StarwarsForm />
      </div>
    );
  }
}

export default App;
