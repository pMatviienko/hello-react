var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');


var Weather = React.createClass({
    getInitialState: function(){
        return {
            location: 'N/A',
            temp: 'N/A'
        }
    },
    handleSearch: function(location){
        this.setState({
            location: location,
            temp: 23
        })
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