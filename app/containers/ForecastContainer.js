var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
	getInitialState: function () {
		return {
			isLoading: true,
			forecastData: {}
		}
	},
	componentDidMount: function () {
		this.makeRequest(this.props.routeParams.city)
	},
	componentWillReceiveProps: function (nextProps) {
		this.makeRequest(nextProps.routeParams.city)
	},
	makeRequest: function (city) {
		//Get from API and print
		api.getForecast(city)
			.then(function (data) {
				this.setState({
					isLoading: false,
					forecastData: data
				})
				console.log(data)
			}.bind(this))
	},
	render: function () {
		return (
			<Forecast
				isLoading = {this.state.isLoading}
				city = {this.props.routeParams.city}
				forecastData = {this.state.forecastData}
			/>
		)
	}
});

module.exports = ForecastContainer;