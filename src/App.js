import './App.css';
import React, { Component } from 'react';

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import ReservationList from './components/ReservationList/ReservationList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Menu />
          <main className="main-content">
            <ReservationList />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
