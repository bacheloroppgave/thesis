var Component = React.createClass({
	onClick: function() {
		alert("HELLO CLICKER");
	},
	render: function() {
		<div>		
			<button onClick={this.onClick}>Click me!</button>
		</div>	
	}
});
