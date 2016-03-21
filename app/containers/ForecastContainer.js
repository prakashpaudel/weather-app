var React = require('react');
var Forecast = require('../components/Forecast');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
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
			}.bind(this))
	},
	handleClick: function (weather) {
		this.context.router.push({
			pathname: '/detail/' + this.props.routeParams.city,
			state: {
				weather: weather
			}
		})
	},
	render: function () {
		return (
			<Forecast
				isLoading = {this.state.isLoading}
				city = {this.props.routeParams.city}
				handleClick={this.handleClick}
				forecastData = {this.state.forecastData}
			/>
		)
	}
});

module.exports = ForecastContainer;