import { BarLoader, BounceLoader, MoonLoader } from "react-spinners";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CubeSpinner, GooSpinner, PongSpinner, WaveSpinner } from "react-spinners-kit";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Profile from'../../assets/Profile.png';



export const LoadingModels = ({progress}) => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
  const downMd = useMediaQuery(themeM.breakpoints.down('md'));
  const downSm = useMediaQuery(themeM.breakpoints.down('sm'));
  const [classes, setClasses] = useState("")
  useEffect(()=>{
    //console.log(progress)
    if(progress == 100){
      setClasses("hideLoading")
    }
  },[progress])

  return(
    <div className={classes} style={{backgroundColor:"#000", width:"100vw", height:"120vh",transform:"TranslateY(-10vh)", position:"fixed", zIndex:1000, top:0, bottom:0, display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Grid container sx={{maxWidth: '1200px', alignItems:"center", padding:downLg ? "3rem" : "3rem"}}>
      {downMd ? 
       <>
      <Grid item xs={12} sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"25rem"}}>
              <img className="photoInitial" src={Profile} style={{width: downSm ? "19rem" : "25rem", zIndex:"100", paddingBottom:"1rem"}} alt="Profile Picture"/>
              <div className="blobInitial" style={{width: downSm ? "20rem" : "26rem",position:"absolute", paddingLeft:"1rem"}}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#3900BB" d="M63.6,-49.8C78.9,-31.6,85.2,-5.4,79.6,17.8C74.1,41,56.6,61.2,34.2,72.6C11.9,83.9,-15.5,86.4,-38.2,76.5C-60.8,66.6,-78.9,44.4,-83.3,20.3C-87.8,-3.8,-78.8,-29.7,-62.6,-48.1C-46.5,-66.5,-23.2,-77.5,0.5,-77.9C24.2,-78.2,48.4,-68,63.6,-49.8Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
            <div style={{fontSize:downSm ? "2rem":"3.5rem", marginBottom:"0.5rem", lineHeight:"1.6", fontWeight:600}}>
              JORGE LOREDO
            </div>
            <div style={{fontSize:downSm ? "1.6rem" : "2.2rem", fontWeight:400, marginBottom:"1rem", color:"#3900BB"}}>
              DEVELOPER
            </div> 
            
            <div style={{marginBottom: downSm ? "0.7rem" : "1rem"}}>
              <BarLoader height={3} width={downSm ? 155 : 215} color="#3900BB" />
            </div>
            <div style={{fontSize:downSm ? "1.11rem" : "1.5rem", color:"#A9A9A9"}}>
              {Math.round(progress * 10) / 10}%
            </div>
      </Grid></>
      :
      <>
      <Grid item md={6} sx={{fontFamily:"Bahnschrift, Helvetica, sans-serif"}}>
            
            <div style={{fontSize:downLg ? "3.5rem" : "4rem", lineHeight:"1.4", fontWeight:600}}>
              JORGE LOREDO
            </div>

            <div style={{fontSize:downLg ? "2.2rem" : "2.3rem", fontWeight:400, marginBottom:"10rem", color:"#3900BB"}}>
              DEVELOPER
            </div>

            <div style={{fontSize:downLg ? "1.2rem" : "1.4rem", lineHeight:"1.4", marginBottom:"1rem", color:"#A9A9A9"}}>
              "A GREAT ARTIST CAN COME FROM ANYWHERE."<br/>- Anton Ego, Ratatouille.
            </div>
            <div style={{marginBottom:"1rem"}}>
              <BarLoader height={3} width={downLg ? 400 : 500} color="#3900BB" />
            </div>

            <div style={{fontSize:downLg ? "1rem" :"1.3rem", color:"#A9A9A9"}}>
              {Math.round(progress * 10) / 10}%
            </div>

          </Grid>
          <Grid item md={6} sx={{position:"relative", justifyContent:"center", alignItems:"center"}}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img className="photoInitial" src={Profile} style={{width:"25rem", zIndex:"100", paddingBottom:"2rem"}} alt="Profile Picture"/>
              <div className="blobInitial" style={{width:"26rem",position:"absolute", paddingLeft:"1rem"}}>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#3900BB" d="M63.6,-49.8C78.9,-31.6,85.2,-5.4,79.6,17.8C74.1,41,56.6,61.2,34.2,72.6C11.9,83.9,-15.5,86.4,-38.2,76.5C-60.8,66.6,-78.9,44.4,-83.3,20.3C-87.8,-3.8,-78.8,-29.7,-62.6,-48.1C-46.5,-66.5,-23.2,-77.5,0.5,-77.9C24.2,-78.2,48.4,-68,63.6,-49.8Z" transform="translate(100 100)" />
                </svg>
              </div>
            </div>
            
          </Grid></>
    }
      </Grid>
    </div>
  )
}