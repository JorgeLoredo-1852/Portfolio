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
    console.log(progress)
    if(progress == 100){
      setClasses("hideLoading")
    }
  },[progress])

  return(
    <div className={classes} style={{backgroundColor:"#000", width:"100vw", height:"150vh",transform:"TranslateY(-25vh)", position:"fixed", zIndex:1000, top:0, bottom:0, display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Grid container sx={{maxWidth: '1200px',height:"100vh", alignItems:"center", padding:downLg ? "2rem" : "0.5rem"}}>
      {downMd ? 
       <>
      <Grid item xs={12} sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <img src={Profile} style={{width:downSm ? "22rem":"30rem", marginBottom:"1.5rem"}} alt="Profile Picture"/>
            <div style={{fontSize:downSm ? "2rem":"3rem", marginBottom:"1rem", lineHeight:"1.4", fontWeight:600}}>
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
            
            <div style={{fontSize:downLg ? "3.8rem" : "5rem", lineHeight:"1.4", fontWeight:600}}>
              JORGE LOREDO
            </div>

            <div style={{fontSize:downLg ? "2.2rem" : "2.5rem", fontWeight:400, marginBottom:"10rem", color:"#3900BB"}}>
              DEVELOPER
            </div>

            <div style={{fontSize:downLg ? "1.2rem" : "1.5rem", lineHeight:"1.4", marginBottom:"1rem", color:"#A9A9A9"}}>
              "A GREAT ARTIST CAN COME FROM ANYWHERE."<br/>- Anton Ego, Ratatouille.
            </div>
            <div style={{marginBottom:"1rem"}}>
              <BarLoader height={3} width={downLg ? 400 : 500} color="#3900BB" />
            </div>

            <div style={{fontSize:downLg ? "1rem" :"1.5rem", color:"#A9A9A9"}}>
              {Math.round(progress * 10) / 10}%
            </div>

          </Grid>
          <Grid item md={6}>
            <img  src={Profile} style={{width:"100%"}} alt="Profile Picture"/>

          </Grid></>
    }
      </Grid>
    </div>
  )
}