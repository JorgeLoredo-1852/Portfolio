import { Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import JGxLogo from '../../assets/icons/JG.png';
import Twitter from '../../assets/icons/Twitter.png';
import Instagram from '../../assets/icons/Instagram.png';
import Linkedin from '../../assets/icons/Linkedin.png';
import Github from '../../assets/icons/Github.png';
import Download from '../../assets/icons/Download.png';
import { useLocation } from 'react-router';

 
export const JGx = ({notHide = true}) => {
    const themeM = useTheme();

    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downXl = useMediaQuery(themeM.breakpoints.down('xl'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));


    const [displayLinks, setDisplayLinks] = useState(window.innerWidth < 1300 ? false : true)
    const [hideClass, setHideClass] = useState("navbar")

    const location = useLocation();

    
    const changeDisplay = () => {
        setDisplayLinks(!displayLinks)
    }

    const downloadCV = () => {
        fetch('/Jorge_Loredo_CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/Jorge_Loredo_CV.pdf';
                alink.click();
            })
        })
    }

    useEffect(()=>{
        if(location.pathname == "/projects"){
            if(downSm){
                setDisplayLinks(false)
            }
            if(!notHide){
                setHideClass("navbar navbar--hide")
            } else {
                setHideClass("navbar")    
            }
        }
        else {
            if(downSm){
                setDisplayLinks(false)
            }
            setHideClass("navbar")
        }
    },[location.pathname, notHide])



  return (
    <div  className={hideClass} style={{flexDirection:downSm ? "column" : "row"}}>
        <div onClick={changeDisplay} style={{cursor:downSm ? "unset" : "pointer", backgroundColor:"#3900BB", borderRadius:"100%", display:"flex", alignItems:"center", justifyContent:"center", zIndex:"210"}} >
            <img className="navbar--header" style={{userSelect:"none"}} src={JGxLogo}/>
        </div>
        <div style={{ display:displayLinks ? "flex" : "none", flexDirection: downSm ? "column" : "row"}} className={downSm? "linksNavTop" : "linksNavLeft"}>
        <div style={{display: displayLinks ? "flex" : "none", cursor:"pointer", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft: downSm ? "0" : "1rem", zIndex:"180", marginTop: downSm ? "1rem" : "0"}} className="nav--link">
                <div onClick={downloadCV} style={{width:"4.1rem", height:"4.1rem"}}>
                    <img className="navbar--item" src={Download}/>
                </div>
            </div> 
            <div style={{display: displayLinks ? "flex" : "none", backgroundColor:"#3900BB", borderRadius:"100%", alignItems:"center", justifyContent:"center", marginLeft: downSm ? "0" : "1rem", zIndex:"180", marginTop: downSm ? "1rem" : "0"}} className="nav--link">
                <a href={"https://twitter.com/JGx_Dev"} target="_blank" rel='nonereferrer' style={{width:"4.1rem", height:"4.1rem"}}>
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

