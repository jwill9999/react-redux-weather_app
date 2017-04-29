import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import _ from 'lodash'




class WeatherList extends Component {

  // our chart data to render dynamically
  // we pass data as props to the charts
  // use lodash or alternative to convert data here to other conversion e,g fahrenheit

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temp = _.map(cityData.list.map(data => data.main.temp), (celcius) => celcius - 273.15);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const { lon, lat } = cityData.city.coord;

   // here we render each chart in the row. Add or subtract them here
   // pass props here to chart
   // import chart and googlemap in imports

        return (
            <tr key={name} >
                <td><GoogleMap lon={lon} lat={lat} zoom={12} /></td>
                <td> <Chart data={temp} color='orange' units="C" /></td>
                <td> <Chart data={humidity} color='blue' units="%" /></td>
                <td> <Chart data={pressure} color='green' units="hPa" /></td>
            </tr>
        )
    }


    render() {

        return (
            <div className="table-responsive margin-top">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (C)</th>
                            <th>Humidity (RH)</th>
                            <th>Pressure (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }

}

export default connect(mapStateToProps)(WeatherList)