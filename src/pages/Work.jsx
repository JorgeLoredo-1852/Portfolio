import { Grid } from "@mui/material"
import { WorkScene } from '../components'
import { Canvas } from "@react-three/fiber"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useInView } from "react-intersection-observer";

import { useState, useRef, useEffect } from "react";


export const Work = () => {
    return(

    <div style={{width:"100vw", height:"100vh", backgroundColor:"#000"}} >
        <Canvas 
            className='canvas' 
            shadows
            camera={{position: [0,30,60], fov:20}}
            color={"#000000"}
            style={{zIndex:100}}
        >
            <WorkScene/>
        </Canvas>
    </div>

    )
}