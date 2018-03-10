import React from 'react';
import Link from 'react-router-dom';
class Navbar extends React.Component {
	render() {
		let linkButton = null;
		if (true) {
			linkButton = <Link to="/login">Login</Link>;
		} else {
			linkButton = <Link to="/logout">Logout</Link>;
		}
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/" ClassName="navbar-brand">Nightlife</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							{linkButton}
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://github.com/xxyzz/nightlife" target="_blank" rel="noopener noreferrer">Github</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://xxyzz.me" target="_blank" rel="noopener noreferrer">Blog</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default Navbar;