import axios from 'axios';
const API_KEY = 'b1e6ac708852ad23c7058c825feb851f';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},br`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}