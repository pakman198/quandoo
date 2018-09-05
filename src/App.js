import './App.css';
import React, { Component } from 'react';

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Menu />
          <main className="main-content">
            Hola Mundo
          </main>
        </div>
      </div>
    );
  }
}

export default App;
