	msgType, msg, err := socket.ReadMessage()
	.
	.
	json.Unmarshal(msg, &request)
	.
	.
	switch actionType {
	case ReceiveRawRoles:
	.
	.
	data := getData(request.info}
	.
	response := json.Marshal(Response{actionType, data})
	socket.WriteMessage(msgType, response)
