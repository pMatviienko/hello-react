var React = require('react');

var GreeterMessage = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'No message specified'
        }
    },
    render: function () {
        return (
            <div style={{border: '2px solid #222299', padding:'5px;', marginBottom:'5px'}}>
                <h1>Hello {this.props.name}</h1>
                <p>{this.props.message}</p>
            </div>
        )
    }
});

module.exports = GreeterMessage;
