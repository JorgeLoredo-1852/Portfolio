import { LandingPage, Projects } from './pages';
import { createBrowserRouter, BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Navbar, NewNav } from './components';

export const AppRoutes = () => {
    return (
      <BrowserRouter><NewNav/>
        <Routes>
          <Route exact path= "/" element= {<><LandingPage /></>}></Route>
          <Route path= "/projects" element= {<><Projects /></>}></Route>
          <Route path= "/work" element= {<></>}></Route>
          <Route path= "/contact" element= {<></>}></Route>
        </Routes>
      </BrowserRouter>       
      )
}