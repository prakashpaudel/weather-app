var React = require('react');
var GetCity = require('../components/GetCity');
var api = require('../helpers/api');

var GetCityContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
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
		this.context.router.push('/forecast/' + this.state.city);

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