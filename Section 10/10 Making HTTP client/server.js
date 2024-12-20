import http from "node:http";

const server = http.createServer((request, response) => {

  console.log("Request method",request.method);
  request.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  response.end("This message from server");

});


server.listen(80, "0.0.0.0", () => {
  console.log("Server started");
});
