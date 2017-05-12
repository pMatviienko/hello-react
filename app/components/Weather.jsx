var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({
    getInitialState: function(){
        return {
            location: 'N/A',
            temp: 'N/A'
        }
    },
    handleSearch: function(location){
        var self = this;

        openWeatherMap.getTemp(location).then(function(temp){
            self.setState({
                location: location,
                temp: temp
            })
        },function(errorMessage){
            alert(errorMessage);
        });
    },
    render: function () {
        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={this.state.location} temp={this.state.temp}/>
            </div>
        );
    }
});

module.exports = Weather;