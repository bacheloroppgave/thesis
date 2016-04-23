  render: function() {
    var students = this.state.students;
    var self = this;
    return(
      <div>
        <StudentSelectorSearch
        query={self.state.query}
        searchFor={self._searchFor}
        />
          {
            students.map( function(student) {
              return(
                  <StudentSelectorElement
                  key={student.studentNumber}
                  student={student}
                  handleClick={self._onAddToGroup.bind(self, student)}
                  />
              );
            })
          }
          </ListGroup>
      </div>
    );
  },
