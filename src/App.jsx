import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Artist from "./pages/Artist";
import Contact from "./pages/Contact";
import Exhibition from "./pages/Exhibition";
import NotFound from "./pages/NotFound";

const wilsonRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/gallery-section', element: <Gallery /> },
  { path: '/artist', element: <Artist /> },
  { path: '/contact', element: <Contact /> },
  { path: '/exhibition', element: <Exhibition /> },
  { path: '*', element: <NotFound /> },
]);

export default function App() {

  return (
    <>
      <RouterProvider router={wilsonRouter} />
    </>
  )
}