import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./index.css";
import "flowbite";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);

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
