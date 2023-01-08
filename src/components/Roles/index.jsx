import { Grid } from "@mui/material"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Stars, GizmoHelper, Sky, GizmoViewport, RoundedBox, Text3D, PerspectiveCamera, ScrollControls, useScroll, Box, Plane } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import * as THREE from "three"
import { useInView } from "react-intersection-observer";
import {Model as Arrow} from '../../models/Arrow'

export const Roles = () => {
    //const { ref, inView } = useInView();
    //const [viewRoles, setViewRoles] = useState(true)

    //useEffect(()=>{
    //    setViewRoles(!viewRoles)
    //}, [inView])
    //console.log(viewRoles)
    return(
        <div style={{width:"100%", height:"100vh"}}>
            <Canvas 
                    className='canvas' 
                    shadows
                    camera={{position: [0,0,40] , fov:15}}
                    gl={{ antialias: false }}
                >
                <ScrollControls pages={4}>
                    <RolesScene/>
                </ScrollControls>
            </Canvas>
        </div>        
    )
}

export const RolesScene = () => {
    const scroll = useScroll()
    const [posScene, setPosScene] = useState(0)
    useFrame((state, delta) => {
        const offset = scroll.offset
        if(offset < 0.45){
            setPosScene(offset*60)
        } else {

        }
    })
    return (
    <>
            <ambientLight intensity={0.5} />
            <Environment preset="forest" blur={0.5}/>
            <group position={[0,posScene,0]}>
                <Arrow position={[8,0,2]} rotation={[0,0,Math.PI]} scale={0.6}/>
                <Arrow position={[-8,0,2]} scale={0.6}/>
                <mesh receiveShadow castShadow scale={[22,11,1]}>
                    <boxGeometry/>
                    <meshStandardMaterial color="#4c00a3" envMapIntensify={0.5} opacity={0.1}/>
                </mesh>
                <mesh receiveShadow castShadow scale={[22,16,1]} position={[0,-13.5,0]}>
                    <boxGeometry/>
                    <meshStandardMaterial color="#1D0060" envMapIntensify={0.5} opacity={0.1}/>
                </mesh>
                <mesh receiveShadow castShadow scale={[22,11,1]} position={[0,-27,0]}>
                    <boxGeometry/>
                    <meshStandardMaterial color="#4c00a3" envMapIntensify={0.5} opacity={0.1}/>
                </mesh>
            </group>
    </>
    )
}