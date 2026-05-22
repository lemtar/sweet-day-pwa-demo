import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 8787);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8"
};

createServer((request, response) => {
  const url = new URL(request.url || "/", "http://localhost");
  const cleanPath = normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, "");
  const requested = cleanPath || "index.html";
  const filePath = join(root, requested);
  const safePath = filePath.startsWith(root) && existsSync(filePath) ? filePath : join(root, "index.html");

  response.writeHead(200, {
    "Content-Type": types[extname(safePath)] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  createReadStream(safePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log("Sweet Day PWA preview: http://127.0.0.1:" + port + "/");
});
