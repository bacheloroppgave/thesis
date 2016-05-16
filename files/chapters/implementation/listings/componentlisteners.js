var CoursePakeLabs = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    StudentSelectorStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    StudentSelectorStore.ChangeListener(this._onChange);
  },
.
.
.
  _onChange: function() {
    this.setState(getStateFromStores());
  }
