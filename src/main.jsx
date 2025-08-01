// import React from "react";
// import { hydrateRoot } from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes/router";
// import "./index.css";
// import "flowbite";

// hydrateRoot(
//   document.getElementById("root"),
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./index.css";
import "flowbite";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { routes } from "./routes/routes";
// import "./index.css";
// import "flowbite";

// const router = createBrowserRouter(routes);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
