// /api/ssr.js
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { render } from "../dist/server/entry-server.js"; // adjust as needed

export default async function handler(req, res) {
  const url = req.url;

  const helmetContext = {};
  const app = await render(url); // this is your render logic from entry-server.jsx
  const html = renderToString(<HelmetProvider context={helmetContext}>{app}</HelmetProvider>);
  const { helmet } = helmetContext;

  res.setHeader("Content-Type", "text/html");
  res.status(200).end(`
    <!DOCTYPE html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  `);
}

// export default async function handler(req, res) {
//   res.setHeader("Content-Type", "text/html");
//   res.status(200).end("<!DOCTYPE html><html><body><h1>Hello from SSR</h1></body></html>");
// }

