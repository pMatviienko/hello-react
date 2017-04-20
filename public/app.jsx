
var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: 'React',
      message: 'No message specified'
    }
  },
  getInitialState:function(){
      return {
        name: this.props.name
      };
  },
  onSetNameSubmit: function(e){
    e.preventDefault();
    this.setState({
      name: (this.refs.name.value == '' ? this.props.name : this.refs.name.value)
    });
    this.refs.name.value = '';
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message + '!!'}</p>
        <form onSubmit={this.onSetNameSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var name="Pasha";
var message = 'This is from component'

ReactDOM.render(
    <Greeter name={name} message={message} />,
    document.getElementById('app')
);
