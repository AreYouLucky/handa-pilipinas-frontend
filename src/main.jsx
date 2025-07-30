// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes/router";
// import "./index.css";
// import "flowbite";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//       <RouterProvider router={router} />
//   </React.StrictMode>,
// );

// import "./index.css";
// import "flowbite";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router";
// import App from "./App";

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//     </Routes>
//   </BrowserRouter>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes/routes";
import "./index.css";
import "flowbite";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
