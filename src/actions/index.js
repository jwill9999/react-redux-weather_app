import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const API = '8a72f2cb3ceeba10440061d6c0abd7d3'
// craft url
// make axios request and store in request variable
// return an action creator and payload of the request promise
// we set up react-promise in our middlewear to handler this action
// you can check in dev tools network request that its working on request.

export function fetchWeather(city){
   
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},UK&appid=${API}`
    const request = axios.get(url);     

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}