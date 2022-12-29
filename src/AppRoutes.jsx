import { Contact, LandingPage, Projects, Work } from './pages';
import { createBrowserRouter, BrowserRouter, Router, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path= "/" element= {<><LandingPage /></>}></Route>
          <Route path= "projects" element= {<><Projects /></>}></Route>
          <Route path= "work" element= {<><Work/></>}></Route>
          <Route path= "contact" element= {<><Contact/></>}></Route>
        </Routes>
      </BrowserRouter>       
      )
}