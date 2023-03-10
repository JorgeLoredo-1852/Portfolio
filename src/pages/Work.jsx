import { Grid } from "@mui/material"
import { WorkScene, JGx } from '../components'
import { Canvas } from "@react-three/fiber"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useInView } from "react-intersection-observer";
import { useProgress} from '@react-three/drei'


import { useState, useRef, useEffect } from "react";


export const Work = () => {

    const { active, progress, errors, item, loaded, total } = useProgress()
    const [chargeComplete, setChargeComplete] = useState(false)

    
    useEffect(()=>{
        if(progress == 100){
                setChargeComplete(true)
        }
    }, [progress])

    return(

    <div style={{width:"100vw", height:"100vh", backgroundColor:"#000000"}} >
        {/*<JGx/>*/}
        <Canvas 
                        className='canvas' 
                        shadows
                        camera={{position: [0,30,60], fov:20}}
                        color={"#000000"}
                        style={{zIndex:100}}
                        dpr={[0.8,1]}

                    >
                        <WorkScene/>
                    </Canvas> 

    </div>

    )
}