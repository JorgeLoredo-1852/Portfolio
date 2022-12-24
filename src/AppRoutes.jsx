import { LandingPage, Projects } from './pages';
import { createBrowserRouter, BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Navbar, NewNav } from './components';

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path= "/" element= {<><NewNav/><LandingPage /></>}></Route>
          <Route path= "/projects" element= {<><NewNav/><Projects /></>}></Route>
          <Route path= "/work" element= {<><NewNav/></>}></Route>
          <Route path= "/contact" element= {<><NewNav/></>}></Route>
        </Routes>
      </BrowserRouter>       
      )
}