import React, { Component } from 'react';
import Switch from './Switch.js'
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            lightBulbsList: [<Switch />]
        }
    }
    addBtnClick = () => {
        let updatedList = this.state.lightBulbsList
        updatedList.push(<Switch key={updatedList.length}/>)
        this.setState({lightBulbsList: updatedList})
    }
    removeBtnClick = () => {
        let updatedList = this.state.lightBulbsList
        updatedList.pop()
        this.setState({lightBulbsList: updatedList})
    }


  render() {
    return (
      <div>
        <h1>Light Bulbs Here!</h1>
        <button onClick={this.addBtnClick}> Add Bulb! </button>
        <button onClick={this.removeBtnClick}> Remove Bulb! </button>
        <div>
            {this.state.lightBulbsList}
        </div>
      </div>
    );
  }
}

export default App;
