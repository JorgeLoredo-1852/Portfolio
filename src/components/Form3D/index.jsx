import {Model as Earth} from '../../models/Earth'
import {Model as Rocket} from '../../models/Rocket'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, RoundedBox, Text3D, PerspectiveCamera } from '@react-three/drei'

import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Form3D = ({submitted}) => {
    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));


    const [earthChange, setEarthChange] = useState(downMd ? -Math.PI/4 : 0)
    const [rocketPos, setRocketPos] = useState(downMd ? [0,-8,0] : [-12,-10,0])

    useEffect(()=>{
        if(!submitted){
            setEarthChange(downMd ? -Math.PI/4 : 0)
            setRocketPos(downMd ? [0,-8,0] : [-12,-10,0])  
        }
    },[downMd])

    useFrame(()=>{
        if(submitted){
            if(downMd){
                if(earthChange < Math.PI/10){
                    setEarthChange(earthChange + 0.01)
                } else {
                    setRocketPos([rocketPos[0], rocketPos[1] + 0.1, rocketPos[2]])
                }
            } else {
                if(earthChange < Math.PI/3){
                    setEarthChange(earthChange + 0.01)
                } else {
                    setRocketPos([rocketPos[0] + 0.1, rocketPos[1] + 0.1, rocketPos[2]])
                }
            }

        }  
    })
    
    return(
        <>
            <ambientLight intensity={0.5} />
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} enableDamping={false}></OrbitControls>
                <Environment preset="forest" blur={0.5}/>
                <group  position={[0, 0, 0]} rotation-x={earthChange}>
                    {/*<Text3D font={'/Inter_Bold.json'} rotation-x={-2*earthChange}>
                        Mail Sent!!!
                        <meshNormalMaterial />
    </Text3D>*/}
                    <Earth position={downMd ? [0,-20,0] : [-20,-20,0]}/>
                    <PerspectiveCamera>
                        <Rocket scale={10} position={rocketPos} rotation-z={downMd ? 0 : -Math.PI/4}/>
                    </PerspectiveCamera>
                    <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade speed={1} rotation-x={earthChange}/>

                </group>
        </>
    )
}