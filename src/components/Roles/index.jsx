import { Grid } from "@mui/material"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Stars, GizmoHelper, Sky, GizmoViewport, RoundedBox, Text3D, PerspectiveCamera, ScrollControls, useScroll, Box, Plane } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import * as THREE from "three"
import { useInView } from "react-intersection-observer";

import {Model as Arrow} from '../../models/Arrow'
import {Model as Portal} from '../../models/home/Portal'
import {Model as Asteroid} from '../../models/React'

import {Model as Tetris1} from "../../models/home/Tetris1"
import {Model as Tetris2} from "../../models/home/Tetris2"
import {Model as Tetris3} from "../../models/home/Tetris3"
import {Model as Tetris4} from "../../models/home/Tetris4"
import {Model as Tetris5} from "../../models/home/Tetris5"
import {Model as Tetris6} from "../../models/home/Tetris6"
import {Model as Tetris7} from "../../models/home/Tetris7"

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
                    color={"#000000"}
                >
                <ScrollControls pages={6}>
                    <RolesScene/>
                </ScrollControls>
            </Canvas>
        </div>        
    )
}

export const RolesScene = () => {
    const scroll = useScroll()
    const [posScene, setPosScene] = useState(0)
    const [posTetris1, setPosTetris1] = useState([0,60,0])
    const [posTetris2, setPosTetris2] = useState([0,100,0])
    const [posTetris3, setPosTetris3] = useState([0,60,0])
    const [posTetris4, setPosTetris4] = useState([0,60,0])
    const [posTetris5, setPosTetris5] = useState([0,60,0])
    const [posTetris6, setPosTetris6] = useState([0,60,0])
    const [posTetris7, setPosTetris7] = useState([0,60,0])

    const [scaleTetris1, setScaleTetris1] = useState(1.8)
    const [scaleTetris2, setScaleTetris2] = useState(1.8)
    const [scaleTetris3, setScaleTetris3] = useState(1.8)
    const [scaleTetris4, setScaleTetris4] = useState(1.8)
    const [scaleTetris5, setScaleTetris5] = useState(1.8)
    const [scaleTetris6, setScaleTetris6] = useState(1.8)
    const [scaleTetris7, setScaleTetris7] = useState(1.8)

    const [rotTetris1, setRotTetris1] = useState([0,-Math.PI/2,0])
    const [rotTetris2, setRotTetris2] = useState([0,-Math.PI/2,0])
    const [rotTetris3, setRotTetris3] = useState([0,-Math.PI/2,0])
    const [rotTetris4, setRotTetris4] = useState([0,-Math.PI/2,0])
    const [rotTetris5, setRotTetris5] = useState([0,-Math.PI/2,0])
    const [rotTetris6, setRotTetris6] = useState([0,-Math.PI/2,0])
    const [rotTetris7, setRotTetris7] = useState([0,-Math.PI/2,0])

    const [rotCourses, setRotCourses] = useState([0,0,0])
    const [posCourses, setPosCourses] = useState([0,-15,-20])
    const [scaleCourses, setScaleCourses] = useState(1)
    const [posPortal, setPosPortal] = useState([0, -21, -20])
    const [hideTetrisLast, setHideTetrisLast] = useState(false)
    const [radiusPortal, setRadiusPortal] = useState(0)


    useFrame((state, delta) => {
        const offset = scroll.offset
        if(offset < 0.30){
            setPosScene(offset*90)
            setPosTetris1([0,60 - offset*280,0])
            setRotTetris1([0,-Math.PI/2 - offset*32.4,offset*32.4])

            setPosTetris2([0,80 - offset*280,0])
            setRotTetris2([0,-Math.PI/2 - offset*32.4,offset*32.4])

            setRadiusPortal(-30 + offset*150)
        } else if (offset < 0.76){
            setPosTetris1([0,60 - offset*280,0])
            setRotTetris1([0,-Math.PI/2 - offset*32.4,offset*32.4])

            setPosTetris2([0,80 - offset*280,0])
            setRotTetris2([0,-Math.PI/2 - offset*32.4,offset*32.4])

            setPosTetris3([0,105 - offset*280,0])
            setRotTetris3([0,-Math.PI/2 - offset*32.4,offset*32.4])

            setPosTetris4([0,125 - offset*280,0])
            setRotTetris4([0,-Math.PI/2 - offset*32.4,offset*32.4])

            setPosTetris5([0,145 - offset*280,0])
            setRotTetris5([0,-Math.PI/2 - offset*32.4,offset*32.4])

            setPosTetris6([0,165 - offset*280,0])
            setRotTetris6([0,-Math.PI/2 - offset*32.4,offset*32.4])

            setPosTetris7([0,186.5 - offset*280,-20])
            setRotTetris7([0,-Math.PI/2 - offset*40.2,offset*40.15])
            
            setPosCourses([0,-15,-20])
            setPosPortal([0, -21, -20])


        }  else if (offset < 0.9){
            setRotTetris7([0,-Math.PI/2 - offset*40.2,offset*40.15])
            setPosTetris7([((offset - 0.76) * 24),186.5 - 0.76*280,-20])

            setPosTetris1([-6,-70,0])
            setRotTetris1([0,-Math.PI/2, 0])
            
            setPosTetris2([3,-73.6,0])
            setRotTetris2([0,-Math.PI/2, 0])

            setPosTetris3([4.8,-68.2,0])
            setRotTetris3([0,-Math.PI/2, 0])

            setPosTetris4([-0.6,-64.6,0])
            setRotTetris4([0,-Math.PI/2, 0])

            setPosTetris5([4.8,-62.8,0])
            setRotTetris5([0,-Math.PI/2, 0])

            setPosTetris6([-0.6,-59.2,0])
            setRotTetris6([0,-Math.PI/2, 0])

            setPosCourses([-1.5,-120 + offset*170,-20])
            setHideTetrisLast(false)

            setPosPortal([0, -107.85713 + offset * 114.2857, -20])

        } else {
            setRotTetris7([0,-Math.PI/2, 0])
            setPosTetris7([4.8,-59.2,0])
            //setPosTetris7([3.3,-82.2+offset*62,250 - offset * 300])

            setHideTetrisLast(true)

            //setPosCourses([-1.5,-120 + offset*170,270 - offset * 300])
            setPosCourses([-1.5,-21 + offset*60,250 - offset * 300])
            setRotCourses([0,-18 * Math.PI + 20 * Math.PI * offset,0])
            //setScaleCourses(3.7 - offset * 3)
            //setRotCourses([Math.PI/9 - ((Math.PI/9) * (offset - 0.9125) * 9), ((Math.PI) * (offset - 0.9125) * 11.5),0])
            //setPosCourses([0,(offset - 0.9125) * 10 * 6,-10])

            //setScaleCourses((offset - 0.84) * 5.5)
            //setPosPilar([0,-40 - (offset - 0.9125)*20, -0.5 + (offset - 0.9125)*12])
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
               {/*<mesh receiveShadow castShadow scale={[22,11,1]} position={[0,-27,0]}>
                    <boxGeometry/>
                    <meshStandardMaterial color="#4c00a3" envMapIntensify={0.5} opacity={0.1}/>
    </mesh>*/}
                <mesh receiveShadow castShadow rotation-x={Math.PI/2 + Math.PI/80} position={posPortal}>
                    <torusGeometry args={[radiusPortal, 0.15, 20, 110, Math.PI * 2]}/>
                    <meshStandardMaterial color="yellow" envMapIntensify={0.5} opacity={0.1}/>
    </mesh>

                    {!hideTetrisLast ?  <Tetris7 position={posTetris7} rotation={rotTetris7} scale={scaleTetris7}/> : <></>}

                    <group rotation={rotCourses} position={posCourses} scale={scaleCourses}>           
                            <Tetris1 position={posTetris1} rotation={rotTetris1} scale={scaleTetris1}/>
                            <Tetris2 position={posTetris2} rotation={rotTetris2} scale={scaleTetris2}/>
                            <Tetris3 position={posTetris3} rotation={rotTetris3} scale={scaleTetris3}/>
                            <Tetris4 position={posTetris4} rotation={rotTetris4} scale={scaleTetris4}/>
                            <Tetris5 position={posTetris5} rotation={rotTetris5} scale={scaleTetris5}/>
                            <Tetris6 position={posTetris6} rotation={rotTetris6} scale={scaleTetris6}/>
                            {hideTetrisLast ?  <Tetris7 position={posTetris7} rotation={rotTetris7} scale={scaleTetris7}/> : <></>}
                            <mesh position={[1.5,-80.5,0]}>
                                <cylinderGeometry args={[16, 16, 10, 64]}/>
                                <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.3} metalness={0}/>
                            </mesh>
                    </group>

            </group>
    </>
    )
}