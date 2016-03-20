var React = require('react');
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
	getInitialState: function () {
		return {
			city: ''
		}
	},
	handleUpdateCity: function (e) {
		this.setState({
			city: e.target.value
		})
	},
	handleSubmitCity: function(e) {
		e.preventDefault();
		var city = this.state.city;
		this.setState({
			city: ''
		});
	},
	render: function() {
		return (
			<GetCity
				city={this.state.city}
				onUpdateCity = {this.handleUpdateCity}
				onSubmitCity = {this.handleSubmitCity}
				direction = {this.props.direction} />
		)
	}
});

module.exports = GetCityContainer;