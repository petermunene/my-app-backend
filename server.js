const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// ✅ Dynamically allow only requests from your frontend
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Prefix API routes with "/api"
server.use("/api", router);

server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server is running on port 5000");
});


