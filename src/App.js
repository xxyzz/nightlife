import React from 'react';
import './App.css';
import {Navbar, Home, Login} from './compoments';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
 

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar/>
					<div className="container">
						<Route exact path="/" component={Home}/>
						<Route path="/login" component={Login}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
