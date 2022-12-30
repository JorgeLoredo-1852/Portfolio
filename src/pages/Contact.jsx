import { useState, useRef, useEffect } from 'react'
import { Form3D } from '../components'
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
  
      /*emailjs.sendForm('service_jg7abqb', 'template_iyit9sr', form.current, 'JgLTAy0eic29nE5Vv')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });*/
        setSubmitted(true)
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
            <Canvas 
                className='canvas' 
                shadows
                camera={{position: [0,30,60], fov:15}}
                style={{zIndex:100}}
            >
                <Form3D submitted={submitted}/>
            </Canvas>
            <div className={fadeOut()}>
                <div style={{backgroundColor: "white" , width: downMd ? "300px" : "500px", height: downMd ? "450px":"400px"}} className={minimizeClass()}>
                    <form ref={form} onSubmit={sendEmail} style={{display:"flex", flexDirection:"column"}}  className={submitted ? 'displaynone':''}>
                        <Grid container sx={{padding:"2rem"}} columnSpacing={3} rowSpacing={3} >
                            <Grid item xs={12}><div style={{color:"black", fontSize:"2rem", fontWeight:"600"}}>Contact me</div></Grid>
                            <Grid item xs={12} md={6} style={{position:"relative"}}>
                                <OutlinedInput
                                    sx={{width:"100%"}} 
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    placeholder='Name'
                                    name="user_name"
                                />
                                <div style={{position:"absolute", right:"0.8rem", bottom:"0.5rem"}}>
                                    <PersonIcon sx={{ color: "black", fontSize:"1.8rem" }} />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} style={{position:"relative"}}>
                                <OutlinedInput
                                    sx={{width:"100%"}} 
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    placeholder='Email'
                                    type='email'
                                    name="user_email"
                                />
                                <div style={{position:"absolute", right:"0.8rem", bottom:"0.5rem"}}>
                                    <EmailIcon sx={{ color: "black", fontSize:"1.8rem" }} />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                            <OutlinedInput
                                    sx={{width:"100%", height:"8rem", alignItems:"start"} }
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    placeholder='Message'
                                    name="message"
                                    
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <input style={{padding: "0.3rem 1rem", color: "white", fontSize: "1rem", textDecoration: "none", textTransform: "uppercase", fontWeight: 400, width: "fit-content",   backgroundColor: "#3900BB", borderRadius:"3px", outline:"none"}} type="submit" value="Send" />
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