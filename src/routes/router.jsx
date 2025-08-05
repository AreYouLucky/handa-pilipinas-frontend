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
import PhotoAlbum from "../pages/PhotosPage/PhotoAlbum";
import Contacts from "../pages/Contacts/Contacts";
import PoliciesAndLaws from "../pages/PoliciesLaws/PoliciesAndLaws";
import LearningMaterials from "../pages/LearningMaterials/LearningMaterials";
import DRRStats from "../pages/DRRStats/DRRStats";
import Photos from "../pages/PhotosPage/Photos";

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
      { path: "/photos", element: <PhotoAlbum /> },
      { path: "/view-images/:slug", element: <Photos /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/policies-and-laws", element: <PoliciesAndLaws /> },
      { path: "/learning-materials", element: <LearningMaterials /> },
      { path: "/drr-stats", element: <DRRStats /> },
    ],
  },
]);
// import { Route, createRoutesFromElements } from "react-router-dom";
// import App from "../App";
// import Home from "../pages/HomePage/Home";
// import About from "../pages/AboutPage/About";
// import Article from "../pages/ContentPage/Article";
// import Video from "../pages/ContentPage/Video";
// import VideoList from "../pages/VideosPage.jsx/VideoList";
// import PressReleaseList from "../pages/PressReleasePage/PressReleaseList";
// import Technologies from "../pages/Technologies/Technologies";
// import Activities from "../pages/Activities/Activities";
// import Speeches from "../pages/Speeches/Speeches";
// import Archives from "../pages/Achives/Archives";
// import Photos from "../pages/PhotosPage/Photos";
// import Contacts from "../pages/Contacts/Contacts";
// import PoliciesAndLaws from "../pages/PoliciesLaws/PoliciesAndLaws";
// import LearningMaterials from "../pages/LearningMaterials/LearningMaterials";
// import DRRStats from "../pages/DRRStats/DRRStats";

// export const routes = createRoutesFromElements(
//   <Route path="/" element={<App />}>
//     <Route index element={<Home />} />
//     <Route path="about" element={<About />} />
//     <Route path="view-article/:slug" element={<Article />} />
//     <Route path="view-video/:slug" element={<Video />} />
//     <Route path="/videos" element={<VideoList />} />
//     <Route path="/press-release" element={<PressReleaseList />} />
//     <Route path="/technologies" element={<Technologies />} />
//     <Route path="/activities" element={<Activities />} />
//     <Route path="/speeches" element={<Speeches />} />
//     <Route path="/archives" element={<Archives />} />
//     <Route path="/photos" element={<Photos />} />
//     <Route path="/contacts" element={<Contacts />} />
//     <Route path="/policies-and-laws" element={<PoliciesAndLaws />} />
//     <Route path="/learning-materials" element={<LearningMaterials />} />
//     <Route path="/drr-stats" element={<DRRStats />} />
//   </Route>
// );
