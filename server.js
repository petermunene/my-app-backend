


const jsonServer = require("json-server");
const cors = require("cors"); // Import CORS middleware

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// ✅ Enable CORS properly
server.use(
  cors({
    origin: "https://petermunene.github.io/", // Allow your frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Prefix API routes with "/api"
server.use("/api", router);

server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server is running on port 5000");
});

