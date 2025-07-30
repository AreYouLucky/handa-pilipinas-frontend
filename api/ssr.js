// import { renderToString } from 'react-dom/server';
// import { render } from '../../dist/server/entry-server.js';
// import { HelmetProvider } from 'react-helmet-async';

// export default async function handler(req, res) {
//   const url = req.url;

//   const helmetContext = {};
//   const app = await render(url);
//   const html = renderToString(<HelmetProvider context={helmetContext}>{app}</HelmetProvider>);
//   const { helmet } = helmetContext;

//   res.setHeader("Content-Type", "text/html");
//   res.status(200).end(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         ${helmet.title.toString()}
//         ${helmet.meta.toString()}
//       </head>
//       <body>
//         <div id="root">${html}</div>
//         <script type="module" src="/src/main.jsx"></script>
//       </body>
//     </html>
//   `);
// }

export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).end("<!DOCTYPE html><html><body><h1>Hello from SSR</h1></body></html>");
}

