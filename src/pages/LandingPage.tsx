import { useState, useRef, useEffect } from 'react'
import { Home, Education } from '@/components'
import { Container, Grid } from "@mui/material"
import { Canvas } from '@react-three/fiber'

export const LandingPage = () =>{
    const [height, setHeight] = useState(0)
    const ref = useRef(null)
  
    useEffect(() => {
      setHeight(ref.current.clientHeight)
    })
  
    return (
        <Grid container>
            <Grid item xs={12}>
                <div style={{backgroundColor: "#242", width: "100%", height:"100%", display:"flex", justifyContent:"center"}}>
                    <div style={{maxWidth: '1260px', backgroundColor: "#242424", width:"100%", height:"100vh"}}>
                        <div ref={ref}>Navbar</div>
                        <Home height={height}/>
                    </div>
                </div>  
            </Grid>
            <Grid item xs={12}>
                <Education/>
            </Grid>
        </Grid>
    )
}