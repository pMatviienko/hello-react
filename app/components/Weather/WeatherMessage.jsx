var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h3>Current temp in {location} is {temp} degree.</h3>
        </div>
    );
};
module.exports = WeatherMessage;