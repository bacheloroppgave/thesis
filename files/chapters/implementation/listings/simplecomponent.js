
var SimpleComponent = React.createClass({
  getInitialState: function() {
    return {
		value: "",
    }
  },
  onChange: function(event) {
  	this.setState({value: event.target.value});
  }s
  render: function() {
	return(
		<input 
		  type="text"
		  value={this.state.value}
		  onChange={this.onChange}
		/>	
	);  
  }  
