import { Grid } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, RoundedBox } from '@react-three/drei'

export const Home = ({height}:any) => {
    console.log(1216 - height)
    return(
        <>
            <Grid container sx={{height: window.innerHeight - height}}>
                <Grid item xs={12} sm={6}>
                <Canvas 
                    className='canvas' 
                    shadows
                    camera={{position: [0,30,60], fov:15}}
                >
                    <OrbitControls/>
                    <Environment preset="city"/>
                    <mesh receiveShadow castShadow rotation-x={- Math.PI / 2} scale={[2,2,2]}>
                        <boxGeometry args={[1,1,1,8,8,8]}/>
                        <meshStandardMaterial color="#2d2d2d" envMapIntensify={0.5} roughness={0} metalness={0} wireframe/>
                    </mesh>
                </Canvas>
                </Grid>
                <Grid item xs={12} sm={6}>
                    Jorge Loredo
                    <br/>
                    Software Engineer
                </Grid>
            </Grid>
        </>
    )
}