import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component{
    detailsWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(function (list) {
                 return list.main.temp
                 });
        return <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines data={temps}>
                        <SparklinesLine color="blue"/>
                    </Sparklines>
                </td>
                </tr>
    }
    render(){
        return(
            <table className="table table-bordered">
                <thead>
                  <tr>
                      <td>City</td>
                      <td>Temp</td>
                      <td>Pressure</td>
                      <td>Humidity</td>
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


