import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { render } from "./dist/server/entry-server.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === "production";
const app = express();

app.use("*", async (req, res) => {
  const url = req.originalUrl;
  const templatePath = isProd
    ? path.resolve(__dirname, "dist/client/index.html")
    : path.resolve(__dirname, "index.html");

  let template = fs.readFileSync(templatePath, "utf-8");

  const helmetContext = {};
  const jsx = await render(url, res);
  const html = renderToString(
    <HelmetProvider context={helmetContext}>{jsx}</HelmetProvider>
  );

  const { helmet } = helmetContext;

  template = template
    .replace(`<!--app-html-->`, html)
    .replace(`<!--head-tags-->`, `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
    `);

  res.status(200).set({ "Content-Type": "text/html" }).end(template);
});

app.listen(5173, () => {
  console.log("Server running at http://localhost:5173");
});
