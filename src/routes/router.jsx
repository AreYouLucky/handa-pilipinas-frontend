import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Article from "../pages/ContentPage/Article";
import Video from "../pages/ContentPage/Video";
import VideoList from "../pages/VideosPage.jsx/VideoList";
import PressReleaseList from "../pages/PressReleasePage/PressReleaseList";
import Technologies from "../pages/Technologies/Technologies";
import Activities from "../pages/Activities/Activities";
import Speeches from "../pages/Speeches/Speeches";
import Archives from "../pages/Achives/Archives";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/view-article/:slug", element: <Article /> },
      { path: "/view-video/:slug", element: <Video /> },
      { path: "/videos", element: <VideoList /> },
      { path: "/press-release", element: <PressReleaseList /> },
      { path: "/technologies", element: <Technologies /> },
      { path: "/activities", element: <Activities /> },
      { path: "/speeches", element: <Speeches /> },
      { path: "/archives", element: <Archives /> },

    ],
  },
]);
