var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Current temp in {this.props.location} is {this.props.temp} degree.</h3>
            </div>
        );
    }
});

module.exports = WeatherMessage;