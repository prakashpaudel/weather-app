var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = "7df9113a771bbc66c15857f6054dc7c3";

function prepRouteParams (queryStringData) {
	return Object.keys(queryStringData)
		.map(function (key) {
			return key + '=' + encodeURIComponent(queryStringData[key]);
		}).join('&')
}

function prepUrl (type, queryStringData) {
	return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
	return {
		q: city,
		type: 'accurate',
		APPID: _APIKEY,
		cnt: 5
	}
}

var api = {
		getCurrentWeather: function (city) {
			queryStringData = getQueryStringData(city);
			url = prepUrl('weather', queryStringData);
			return axios.get(url)
				.then(function (currentData) {
					return currentData.data
				})
				.catch(function (err) {
					console.warn('Error in getCurrentWeather: ', err)
				})
		},
		getForecast: function (city) {
			queryStringData = getQueryStringData(city);
			url = prepUrl('forecast/daily', queryStringData);
			return axios.get(url)
				.then(function (currentData) {
					return currentData.data
				})
				.catch(function (err) {
					console.warn('Error in getForecast: ', err)
				})
		}
}

module.exports = api;