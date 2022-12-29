import { Typography } from "@mui/material";
import React, { useState } from "react";

export const JGx = () => {

    const [displayLinks, setDisplayLinks] = useState(false)

    const changeDisplay = () => {
        setDisplayLinks(!displayLinks)
    }

  return (
    <div className="navbar">
        <div onClick={changeDisplay} style={{backgroundColor:"#3900BB", borderRadius:"100%", display:"flex", alignItems:"center", justifyContent:"center", zIndex:"210", cursor:"pointer"}}>
            <img className="navbar--header" src="/icons/JG.png"/>
        </div>
        <div style={{ display:displayLinks ? "flex" : "none"}} className="linksNav">
            <div style={{display: displayLinks ? "flex" : "none", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft:"1rem", zIndex:"180"}} className="nav--link">
                <a href={"https://twitter.com/JGxFazciste"} target="_blank" rel='nonereferrer' style={{width:"4.1rem", height:"4.1rem"}}>
                    <img className="navbar--item" src="/icons/Twitter.png"/>
                </a>
            </div>
            <div style={{display: displayLinks ? "flex" : "none", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft:"1rem", zIndex:"180"}} className="nav--link">
                <a href={"https://www.instagram.com/jorge.loredo.02"} target="_blank" rel='nonereferrer' style={{width:"4.1rem", height:"4.1rem"}}>
                    <img className="navbar--item" src="/icons/Instagram.png"/>
                </a>
            </div>
            <div style={{display: displayLinks ? "flex" : "none", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft:"1rem", zIndex:"180"}} className="nav--link">
                <a href={"https://www.linkedin.com/in/jorgeloredom/"} target="_blank" rel='nonereferrer' style={{width:"4.1rem", height:"4.1rem"}}>
                    <img className="navbar--item" src="/icons/Linkedin.png"/>
                </a>
            </div>
            <div style={{display: displayLinks ? "flex" : "none", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft:"1rem", zIndex:"180"}} className="nav--link">
                <a href={"https://github.com/JorgeLoredo-1852"} target="_blank" rel='nonereferrer' style={{width:"4.1rem", height:"4.1rem"}}>
                    <img className="navbar--item" src="/icons/Github.png"/>
                </a>
            </div>
        </div>
    </div>
  );
};

