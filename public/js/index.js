let socket = io();
socket.on("connect", function() {
  console.log("connected to the server");
});

socket.on("disconnect", function() {
  console.log("disconected from server");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
});
