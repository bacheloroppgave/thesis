  _onChange: function() {
    this.setState(getStateFromStores());
  },

  _onAddToGroup: function(student) {
    StudentSelectorActionCreators.addStudentToGroup(student);
  },

  _searchFor: function(event) {
    this.setState({query: event.target.value})
    StudentSelectorActionCreators.searchForStudent(event.target.value);
  }
});
\end{lstlisting}
