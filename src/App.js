import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import GenerateQrda from './components/submission/GenerateQrda.jsx'

class App extends Component {
  render(){
    return (
      <div className="App">
        <GenerateQrda></GenerateQrda>
      </div>
    )

  }
}

export default App;
