import { Contact, LandingPage, Projects, Work } from './pages';
import { createBrowserRouter, BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { NewNav } from './components';

export const AppRoutes = () => {
    return (
      <>
      <BrowserRouter>
      <NewNav/>
        <Routes>
          <Route exact path= "/" element= {<Projects />}></Route>
          <Route path= "/projects" element= {<LandingPage />}></Route>
          <Route path= "/work" element= {<Work/>}></Route>
          <Route path= "/contact" element= {<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      </>    
      )
}