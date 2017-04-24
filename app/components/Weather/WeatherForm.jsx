var React = require('react');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <div><label>City: <input type="text"/></label></div>
                    <div><button>Get Weather</button></div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;