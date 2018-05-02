import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <header className="App-header" style={{display: 'flex'}}>
        <img src={logo} className="App-logo" alt="logo" style={{position: 'absolute'}} />
        <h1 className="App-title" style={{width: '100%', textAlign: 'center', marginBottom: '0px'}}>Blog Creator</h1>
      </header>
    );
  }
}

export default Header;
