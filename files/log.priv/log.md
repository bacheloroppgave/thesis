#*.02.2016

Client-side vs server-side rendering
[texttt](http://openmymind.net/2012/5/30/Client-Side-vs-Server-Side-Rendering/)

* (we need to look at it more, but the way we designed it is good i guess )
* Websocket
* Flux [dispacher](https://github.com/facebook/flux)
* ES6 Promises
* Event Emitter
* JS single threaded approaches
* Busy waiting BAD!
* TESTING YOUR CODE!!! [Jest](https://facebook.github.io/jest/)

Why we used React.js would we use it for this project if we were to start over?
Problems with huge one page apps, and what react solves by lazy compilation/interpretation
How important is testing your code

#*.03.2016
##05.03.2016

Is this real time flux style necessary for all components, will this help in future improvement of the system?

##07.03.2016

React
Clearly better for pushing updates from server, instant render and user experience improves :ok_hand:

#16.03.2016

#17.03.2016

It is important to design user interface by looking at the use case first, and then adjusting the UI, not the other way around.

#19.03.2016

write about OOP

notifications of important events are imporatnt to implement.

#22.03.2016

binding to null for child components in react..
https://groups.google.com/forum/#!topic/reactjs/Xv9_kVoJJOw

#23.03.2015

Intro og motivation OK
Background (beskrive kun hva de teknologiene gjør, ikke hvordan vi bruker de)
 Frontend {React,HTML,JavaScript (single thread),Bootstrap,Websockets}
 Backend  {Go, Websockets, mySQL/SQL}
Design/Architecture (hva vi bruker de technologiene til og hvordan)
 Webapp {User Interface, HTML, JavaScript(FLUX),Artistic Design, Data fetching}
 Server {Server, Communication, Storage}
Implementation (forklare hvordan alt er koblet sammen)
 Client {React, Flux, Websockets}
 Server {go/http, gorilla/websockets, SQL driver, Database}

  