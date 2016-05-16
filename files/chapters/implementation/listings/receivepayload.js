  case ActionTypes.QUERY_FOR_STUDENT:
     _savePreviousQuery();
     _searchForStudent(action.query);
     TeacherGroupsStore.emitChange();
     break;
