var React = require('react');

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
                        <label>Message: <textarea ref="message"></textarea></label>
                    </div>
                    <div>
                        <button>Set Name and message</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = GreeterForm;