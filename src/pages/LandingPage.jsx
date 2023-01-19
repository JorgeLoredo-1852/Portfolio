import { useState, useRef, useEffect } from 'react'
import { Home, Education, Roles } from '../components'
import { Container, Grid } from "@mui/material"
import { Canvas } from '@react-three/fiber'

export const LandingPage = () =>{
  
    return (
        <div className='app' style={{backgroundColor:"#000000"}}>
            <Roles/>
        </div>
    )
}