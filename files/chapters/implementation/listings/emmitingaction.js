  searchForStudent: function(query) {
    AGDispatcher.dispatch({
        type: ActionTypes.QUERY_FOR_STUDENT,
        query: query,
    });
