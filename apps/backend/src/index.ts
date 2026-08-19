import http from "http";
import app from "./app.js";

const server = http.createServer(app);

server.listen(4000, () => console.log("Server is running on 4000"));