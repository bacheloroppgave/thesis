  convertStudents: function(rawStudents) {
    var students = [];
    if (rawStudents === null || rawStudents === undefined || rawStudents.length == 0) {
      return [];
    } else {
      rawStudents.forEach(function(rawStud) {
        var stud = {};
        stud.firstName = rawStud.FirstName;
        stud.lastName = rawStud.LastName;
        stud.username = rawStud.Github;
        stud.labdata = rawStud.LabData;
        students.push(stud);
      });
      return students;
    }
  },
