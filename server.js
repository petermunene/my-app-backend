

const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// ✅ Proper CORS Configuration
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://petermunene.github.io"); // ✅ Fixed Origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS"); // ✅ Allow all methods
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // ✅ Specific headers allowed
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // ✅ Handle preflight requests
  }
  
  next(); // ✅ Important! Allows request to continue
});

// ✅ Use "/api" as the route prefix
server.use("/api", router);

server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server is running on port 5000");
});

