import React, { Component } from 'react';
import NavBar from './components/NavBar';
import PlayerList from './components/CourseList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CourseList />
      </div>
    );
  }
}

export default App;
