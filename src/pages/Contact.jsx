import { useState, useRef, useEffect } from 'react'
import { Form3D, JGx } from '../components'
import { Container, Grid, InputAdornment, OutlinedInput, Typography, IconButton } from "@mui/material"
import { Canvas, useFrame } from '@react-three/fiber'
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import {Model as Earth} from '../models/Earth'
import {Model as Rocket} from '../models/Rocket'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, RoundedBox, Text3D } from '@react-three/drei'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#E7C300',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      secondary: {
          main: "#F2E5FF"
      }
    },
  });

export const Contact = () =>{
    const form = useRef();
    const [submitted, setSubmitted] = useState(false)
    const [earthChange, setEarthChange] = useState(0)
    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

    const sendEmail = (e) => {
      e.preventDefault();
      const a = e.target.user_name.value
      const b = e.target.user_email.value
      const c = e.target.message.value

      if(a && b && c){
        emailjs.sendForm('service_jg7abqb', 'template_iyit9sr', form.current, 'JgLTAy0eic29nE5Vv')
            .then((result) => {
                console.log(result.text);
                setSubmitted(true)
                e.target.reset()
            }, (error) => {
                console.log(error.text);
        });
      }
    };

    const minimizeClass=()=>{
        if(submitted){
            if(downMd){
                return "minimizeSmall"
            }else{
                return "minimize"
            }
        }
        return ''
    }

    const fadeOut = () => {
        if(submitted){
            if(downMd){
                return "fadeOutBottom"
            }else{
                return "fadeOut"
            }
        }
        return 'contact'
    }
  
    return (
        <div style={{height:"100vh", width:"100vw", position:"relative", backgroundColor:"#000000"}}>
            <JGx/>
            <Canvas 
                className='canvas' 
                shadows
                camera={{position: [0,30,60], fov:15}}
                color={"#000000"}
                style={{zIndex:100}}
            >
                <Form3D submitted={submitted}/>
            </Canvas>
            <div className={fadeOut()}>
                <div style={{backgroundColor: "#1D0060" , width: downMd ? "300px" : "500px", height: downMd ? "420px":"380px"}} className={minimizeClass()}>
                    <form autoComplete="off" ref={form} onSubmit={sendEmail} style={{display:"flex", flexDirection:"column"}}  className={submitted ? 'displaynone':''}>
                        <Grid container sx={{padding:"2rem"}} columnSpacing={3} rowSpacing={downMd ? 2 : 3} >
                            <Grid item xs={12}><div style={{color:"white", fontSize:"2rem", fontWeight:"600"}}>Contact</div></Grid>
                            <Grid item xs={12} md={6} style={{position:"relative"}}>
                                <ThemeProvider theme={theme}>
                                <OutlinedInput
                                    sx={{width:"100%", backgroundColor:"#3900BB", input: {color:"white"}}} 
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    placeholder='Name'
                                    color='primary'
                                    name="user_name"
                                />
                                </ThemeProvider>
                                <div style={{position:"absolute", right:"0.8rem", bottom:"0.5rem"}}>
                                    <PersonIcon sx={{ color: "white", fontSize:"1.8rem" }} />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} style={{position:"relative"}}>
                                <ThemeProvider theme={theme}>
                                <OutlinedInput
                                    sx={{width:"100%", backgroundColor:"#3900BB", input: {color:"white"}}} 
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    placeholder='Email'
                                    type='email'
                                    color='primary'
                                    name="user_email"
                                />
                                </ThemeProvider>
                                <div style={{position:"absolute", right:"0.8rem", bottom:"0.5rem"}}>
                                    <EmailIcon sx={{ color: "white", fontSize:"1.8rem" }} />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                            <ThemeProvider theme={theme}>
                            <OutlinedInput
                                    sx={{width:"100%", height:"8rem", alignItems:"start", backgroundColor:"#3900BB", input: {color:"white"}} }
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    placeholder='Message'
                                    name="message"
                                    color='primary'
                                />
                                </ThemeProvider>
                            </Grid> 
                            <Grid item xs={12}>
                                <input style={{padding: "0.5rem 1.5rem", color: "white", fontSize: "1.2rem", textDecoration: "none", textTransform: "uppercase", fontWeight: 500, width:"100%",  backgroundColor: "#3900BB", borderRadius:"3px", outline:"none"}} type="submit" value="Send" />
                            </Grid>
                        </Grid>
                    </form>     
                </div>
            </div>
        </div>
    );
}


/*

*/