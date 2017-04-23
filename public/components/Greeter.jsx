var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');


var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'No message specified'
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewName: function (name) {
        this.setState({
            name: name
        });
    },
    handleNewMessage: function(message){
        this.setState({
            message: message
        });
    },
    render: function () {
        return (
            <div style={{border: '2px solid #992222', padding:'5px;', float:'left'}}>
                <GreeterMessage name={this.state.name} message={this.state.message}/>
                <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
            </div>
        );
    }
});

module.exports = Greeter;