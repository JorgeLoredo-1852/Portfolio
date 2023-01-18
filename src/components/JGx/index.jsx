import { Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import JGxLogo from '../../assets/icons/JG.png';
import Twitter from '../../assets/icons/Twitter.png';
import Instagram from '../../assets/icons/Instagram.png';
import Linkedin from '../../assets/icons/Linkedin.png';
import Github from '../../assets/icons/Github.png';

 
export const JGx = ({notHide = true}) => {
    const themeM = useTheme();

    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downXl = useMediaQuery(themeM.breakpoints.down('xl'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));


    const [displayLinks, setDisplayLinks] = useState(false)
    
    const changeDisplay = () => {
        setDisplayLinks(!displayLinks)
    }

    console.log(notHide)


  return (
    <div className={notHide ? "navbar" : "navbar navbar--hide"} style={{flexDirection:downSm ? "column" : "row"}}>
        <div onClick={changeDisplay} style={{backgroundColor:"#3900BB", borderRadius:"100%", display:"flex", alignItems:"center", justifyContent:"center", zIndex:"210", cursor:"pointer"}} >
            <img className="navbar--header" src={JGxLogo}/>
        </div>
        <div style={{ display:displayLinks ? "flex" : "none", flexDirection: downSm ? "column" : "row"}} className={downSm? "linksNavTop" : "linksNavLeft"}>
            <div style={{display: displayLinks ? "flex" : "none", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft: downSm ? "0" : "1rem", zIndex:"180", marginTop: downSm ? "1rem" : "0"}} className="nav--link">
                <a href={"https://twitter.com/JGxFazciste"} target="_blank" rel='nonereferrer' style={{width:"4.1rem", height:"4.1rem"}}>
                    <img className="navbar--item" src={Twitter}/>
                </a>
            </div>
            <div style={{display: displayLinks ? "flex" : "none", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft: downSm ? "0" : "1rem", zIndex:"180", marginTop: downSm ? "1rem" : "0"}} className="nav--link">
                <a href={"https://www.instagram.com/jorge.loredo.02"} target="_blank" rel='nonereferrer' style={{width:"4.1rem", height:"4.1rem"}}>
                    <img className="navbar--item" src={Instagram}/>
                </a>
            </div>
            <div style={{display: displayLinks ? "flex" : "none", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft: downSm ? "0" : "1rem", zIndex:"180", marginTop: downSm ? "1rem" : "0"}} className="nav--link">
                <a href={"https://www.linkedin.com/in/jorgeloredom/"} target="_blank" rel='nonereferrer' style={{width:"4.1rem", height:"4.1rem"}}>
                    <img className="navbar--item" src={Linkedin}/>
                </a>
            </div>
            <div style={{display: displayLinks ? "flex" : "none", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft: downSm ? "0" : "1rem", zIndex:"180", marginTop: downSm ? "1rem" : "0"}} className="nav--link">
                <a href={"https://github.com/JorgeLoredo-1852"} target="_blank" rel='nonereferrer' style={{width:"4.1rem", height:"4.1rem"}}>
                    <img className="navbar--item" src={Github}/>
                </a>
            </div>
        </div>
    </div>
  );
};

