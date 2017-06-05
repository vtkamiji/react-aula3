import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
/*https://home.openweathermap.org: password: udemyreact*/
/*b1e6ac708852ad23c7058c825feb851f*/
export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term:''};
		//faz o bind da função com o contexto do SearchBar
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({term: event.target.value})
	}

	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">				
				<input type="text" 
					placeholder="Get a five-day forecast in your favorite city"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}/> 
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submmit</button>
				</span>				
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}