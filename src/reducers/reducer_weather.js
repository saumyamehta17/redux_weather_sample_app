import {WEATHER_SEARCH} from '../actions'

function proces_weather(state=[],action) {
    console.log('Reducer Call:',action.payload);
    switch(action.type){
        case WEATHER_SEARCH:

           return state.concat([action.payload.data]);
            // retrun [action.payload.data, ...state.weather];
    }
    return state
}
export default proces_weather;