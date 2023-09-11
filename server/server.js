// server.js
import { createServer } from "http";
import { readFile } from "fs/promises";
import { join } from "path";

const server = createServer(async (req, res) => {
  if (req.url === "/login") {
    const file = await readFile(join(__dirname, "../client/login.html"), "utf8");
    res.setHeader("Content-Type", "text/html");
    res.end(file);
  } else if (req.url === "/client/js/login.js") {
    const file = await readFile(join(__dirname, "../client/js/login.js"), "utf8");
    res.setHeader("Content-Type", "text/javascript");
    res.end(file);
  }else if (req.url === "/index") {
    const file = await readFile(join(__dirname, "../client/index.html"), "utf8");
    res.setHeader("Content-Type", "text/html");
    res.end(file);
  } else {
    res.statusCode = 404;
    res.end("Not found bruh");
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});