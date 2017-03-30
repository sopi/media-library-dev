import React, { Component, PropTypes } from 'react';
import Header from '../common/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import '../styles/styles.css'

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid text-center">
          <Header />
          <Routes />
        </div>
      </Router>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;