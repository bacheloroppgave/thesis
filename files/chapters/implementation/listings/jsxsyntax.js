render: function(){
    var self = this;
    return (
	    <Col xs={12} className="whitebox">
	        <Col xs={4}>
	            <StandardSettings/>
	        </Col>
	        <Col xs={4}>
	            <Assignments/>
	        </Col>
	        <Col xs={4}>
	            <CIOptions/>
	        </Col>
	    </Col>
    )
}
});
