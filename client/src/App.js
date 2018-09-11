import React, { Component } from 'react';
import './App.css';
import PostalCodesForm from './PostalCodesForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Downshift US Postal Codes</h1>
        </header>
        <PostalCodesForm />
      </div>
    );
  }
}

export default App;
