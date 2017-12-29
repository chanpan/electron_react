import React, { Component } from 'react';
import './App.css';
import Headers from './components/Header';
import Footers from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
         <Headers />
         <Footers />
      </div>
    );
  }
}

export default App;
