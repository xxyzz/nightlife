import React from 'react';
class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {location: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return(
			<div className="search row justify-content-center">
				<div className="col">
					<form className="form-inline justify-content-center" onSubmit={this.handleSubmit}>
						<input className="form-control mr-sm-2" type="search" required placeholder="Your location" aria-label="Search" value={this.state.value} onChange={this.handleChange}/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</div>
		);
	}
}
export default Search;