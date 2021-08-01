const http = require("http");
const { getProduct } = require("./controllers/productController");

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProduct(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found!" }));
  }
});

server.listen(PORT, () => {
  console.log(`running in http://localhost:${PORT}`);
});
