var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');


var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading:false
        }
    },
    handleSearch: function(location){
        var self = this;
        self.setState({
            isLoading:true
        });

        // debugger;
        openWeatherMap.getTemp(location).then(function(temp){
            self.setState({
                location: location,
                temp: temp,
                isLoading:false
            })
        },function(errorMessage){
            alert(errorMessage);
            self.setState({
                isLoading:false
            });
        });
    },
    render: function () {
        var {isLoading, location, temp} = this.state;
        function renderMessage(){
            if(isLoading){
                return <h3>Loading ... </h3>;
            } else if(location && temp){
                return <WeatherMessage location={location} temp={temp}/>;
            } else {
                return <h3>Enter location to see weather.</h3>
            }
        }
        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;