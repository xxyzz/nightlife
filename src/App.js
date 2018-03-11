import React from 'react';
import './App.css';
import {Navbar, Home, Login, NoMatch} from './compoments';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar/>
					<div className="container text-center">
						<Switch>>
						<Route exact path="/" component={Home}/>
						<Route path="/login" component={Login}/>
						<Route component={NoMatch}/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;