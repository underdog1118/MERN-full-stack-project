const http = require("http");

http.createServer((req, res) => {
  console.log("Incoming Request");
  console.log(req.method, req.url);

  res.end('Success!');
});

Server.listen(5000);
