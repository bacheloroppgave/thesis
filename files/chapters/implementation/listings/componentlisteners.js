var StudentSelector = React.createClass({

  getInitialState: function() {
    StudentSelectorAPI.getAllStudents();
    return getStateFromStores();
  },

  componentDidMount: function() {
    StudentSelectorStore.addChangeListener(this._onChange);
  },

  componentWillunmount: function() {
    StudentSelectorStore.ChangeListener(this._onChange);
  },