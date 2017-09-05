import axios from 'axios';
export const WEATHER_SEARCH = 'WEATHER_SEARCH';
const WEATHER_API_KEY = 'd35a2303c8637ce19fcab397001b5fa9';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

function fetchWeather(term) {
    const request = axios.get(`${BASE_URL}&q=${term},us`)
    //     .then((res)=>{
    //  abc = res
    // });

    return{
        type: WEATHER_SEARCH,
        payload: request
    }

}
export default fetchWeather;