import { Contact, LandingPage, Projects, Work } from './pages';
import { BrowserRouter, useLocation, Route, Routes } from "react-router-dom";
import { NewNav } from './components';

export const AppRoutes = () => {
  const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
          <Route path= "/projects" element= {<LandingPage />}></Route>
          <Route path= "/work" element= {<Work/>}></Route>
          <Route path= "/contact" element= {<Contact/>}></Route>
          <Route path= "*" element={<Projects />} />

        </Routes>
      )
}