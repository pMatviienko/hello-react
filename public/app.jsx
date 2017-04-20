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

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        if(name != ''){
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
        if(message != ''){
            this.props.onNewMessage(message);
        }
    },
    render: function () {
        return (
            <div style={{border: '2px solid #229922', padding:'5px;'}}>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>Name: <input type="text" ref="name"/></label>
                    </div>
                    <div>
                        <label>Message: <input type="text" ref="message"/></label>
                    </div>
                    <div>
                        <button>Set Name and message</button>
                    </div>
                </form>
            </div>
        )
    }
});


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

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);
