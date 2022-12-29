import { useState, useRef, useEffect } from 'react'
import { Home, Education, NewNav } from '../components'
import { Container, Grid } from "@mui/material"
import { Canvas } from '@react-three/fiber'

export const LandingPage = () =>{
  
    return (
        <Grid container className='app'>
            <Grid item xs={12}>
                <div style={{backgroundColor: "#242", width: "100%", height:"100%", display:"flex", justifyContent:"center"}}>
                    <div style={{maxWidth: '1260px', backgroundColor: "#242424", width:"100%", height:"100vh"}}>
                        <Home/>
                    </div>
                </div>  
            </Grid>
            <Grid item xs={12}>
                <Education/>
            </Grid>
        </Grid>
    )
}