# mqtt-ws-bridge
simple bridge between socket.io (in browser) and mqtt client (in node.js)

## setup
``git clone https://github.com/Jorgen-VikingGod/mqtt-ws-bridge.git``

``npm install``

``npm start``

open **http://localhost:8080/index.html** or **http://localhost:8080/index.html**

## Configure 
you can modify and add new actions by addind new buttons to the html.
e.g. if you want to send to subtopic **background** and payload **black**
https://github.com/Jorgen-VikingGod/mqtt-ws-bridge/blob/master/public/WordClock_13435218.html#L107

the css-class ''wordclock-background'' is just for handling the publish:
https://github.com/Jorgen-VikingGod/mqtt-ws-bridge/blob/master/public/WordClock_13435218.html#L213-L215

you can tell the page to activate a button, if some messages received from mqtt:
https://github.com/Jorgen-VikingGod/mqtt-ws-bridge/blob/master/public/WordClock_13435218.html#L190-L196

modify your hostname and port + base topic:
https://github.com/Jorgen-VikingGod/mqtt-ws-bridge/blob/master/public/WordClock_13435218.html#L173-L174
