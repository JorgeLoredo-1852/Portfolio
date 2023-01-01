import { useState, useRef, useEffect } from 'react'
import { Home, Education, Underground } from '../components'
import { Container, Grid } from "@mui/material"
import { Canvas } from '@react-three/fiber'

export const LandingPage = () =>{
  
    return (
        <Grid container className='app'>
            <Grid item xs={12}>
                <div style={{backgroundColor: "black", width: "100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <div style={{maxWidth: '1260px', backgroundColor: "#242424", width:"100%", height:"100vh", backgroundImage: "url('/landingImages/primera.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <Home/>
                    </div>
                    <div style={{maxWidth: '1260px', backgroundColor: "#242424", width:"100%", height:"100vh", backgroundImage: "url('/landingImages/segunda.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <Underground/>
                    </div>
                </div>  
            </Grid>
            <Grid item xs={12}>
                <Education/>
            </Grid>
        </Grid>
    )
}