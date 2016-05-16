  searchForStudent: function(query) {
    AGDispatcher.dispatch({
        actionType: ActionTypes.QUERY_FOR_STUDENT,
        query: query,
    });
