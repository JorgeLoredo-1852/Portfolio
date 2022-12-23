import { LandingPage, Projects } from './pages';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from './components';

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar/>
          <LandingPage />
        </>
      ),
    },
    {
      path: "projects",
      element: (
      <>
        <Navbar/>
        <Projects />
      </>
      ),
    },
    {
      path: "work",
      element: (
      <>
        <Navbar/>
      </>
      ),
    },
    {
      path: "contact",
      element: (
      <>
        <Navbar/>
      </>
      ),
    },
]);

export const AppRoutes = () => {
    return ( <RouterProvider router={router} />)
}