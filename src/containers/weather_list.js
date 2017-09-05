import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component{
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
                   {this.props.weather && this.props.weather.map(function (cityData) {
                       // return <tr>{cityData.city.name}</tr>
                   })}
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