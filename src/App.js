import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';

class App extends React.Component {
    render() {
        return (
          <React.Fragment>
            <NavBar/>
            <div className="container">
              <Search/>
            </div>
          </React.Fragment>
        );
    }
}

export default App;
