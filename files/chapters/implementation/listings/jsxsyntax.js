render: function() {
   const innerSearch = <Glyphicon glyph="search"/>;
   var students = this.state.students; 
   return(
      <Col xs={12}>
        <Col xs={resultSize} className="infoboxleft">
            <StudentResultsList students={students}/>
        </Col>
        <Col xs={labSize} className="infoboxright">
            <Labview/>
        </Col>
      </Col>
    );
  }
});

