import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ImageUpload from './components/image-upload';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router >
          <div>
            <Route exact path="/" component={ImageUpload} />
            <Route exact path="/upload" component={ImageUpload} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
