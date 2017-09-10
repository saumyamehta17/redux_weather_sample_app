import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component{
    detailsWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map((list) => { return list.main.temp });
        const pressures = cityData.list.map((list) => { return list.main.pressure });
        const humidities = cityData.list.map((list) => { return list.main.humidity });
        const {lat, lon} = cityData.city.coord;

        return <tr key={name}>
                    <td><GoogleMap lat={lat} lon={lon}/></td>
                    <td><Chart data={temps} color="blue"/></td>
                    <td><Chart data={pressures} color="orange"/></td>
                    <td><Chart data={humidities} color="grey"/></td>
                </tr>
    }
    render(){
        return(
            <table className="table table-bordered">
                <thead>
                  <tr>
                      <td>City</td>
                      <td>Temperature (K)</td>
                      <td>Pressure (hPa)</td>
                      <td>Humidity (%)</td>
                  </tr>
                </thead>
                <tbody>
                   {this.props.weather && this.props.weather.map(this.detailsWeather)}
                </tbody>
            </table>
        )
    }
}

function mapPropsToState(state) {
    console.log(state)
    return{weather: state.weather}
}
export default connect(mapPropsToState)(WeatherList)


