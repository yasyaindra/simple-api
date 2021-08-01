const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Success!" }));
});

server.listen(PORT, () => {
  console.log(`running in http://localhost:${PORT}`);
});
