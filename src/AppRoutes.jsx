import { LandingPage, Projects } from './pages';
import { createBrowserRouter, BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components';

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path= "/" element= {<><Navbar/><LandingPage /></>}></Route>
          <Route path= "/projects" element= {<><Navbar/><Projects /></>}></Route>
          <Route path= "/work" element= {<><Navbar/></>}></Route>
          <Route path= "/contact" element= {<><Navbar/></>}></Route>
        </Routes>
      </BrowserRouter>       
      )
}