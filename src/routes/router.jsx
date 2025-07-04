import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Article from "../pages/ContentPage/Article";
import Video from "../pages/ContentPage/Video";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/view-article/:slug", element: <Article /> },
      { path: "/view-video/:slug", element: <Video /> },

    ],
  },
]);
