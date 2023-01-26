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
                    gl={{ antialias: false }}
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
    const [posTetris2, setPosTetris2] = useState([0,60,0])
    const [posTetris3, setPosTetris3] = useState([0,60,0])
    const [posTetris4, setPosTetris4] = useState([0,60,0])
    const [posTetris5, setPosTetris5] = useState([0,60,0])
    const [posTetris6, setPosTetris6] = useState([0,60,0])
    const [posTetris7, setPosTetris7] = useState([0,60,0])

    const [scaleTetris1, setScaleTetris1] = useState(1)
    const [scaleTetris2, setScaleTetris2] = useState(1)
    const [scaleTetris3, setScaleTetris3] = useState(1)
    const [scaleTetris4, setScaleTetris4] = useState(1)
    const [scaleTetris5, setScaleTetris5] = useState(1)
    const [scaleTetris6, setScaleTetris6] = useState(1)
    const [scaleTetris7, setScaleTetris7] = useState(1)

    const [rotCourses, setRotCourses] = useState([Math.PI/9,0,0])
    const [posCourses, setPosCourses] = useState([0,0,-10])
    const [scaleCourses, setScaleCourses] = useState(0.4)
    const [posPilar, setPosPilar] = useState([0,-40,-0.5])


    useFrame((state, delta) => {
        const offset = scroll.offset
        if(offset < 0.30){
            setPosScene(offset*90)
            setPosTetris1([0,6.5 - offset*100,0])
            setScaleTetris1(2 - offset*4)
        } else {
            if(offset < 0.3875){
                setPosTetris1([0,6.5 - offset*100,0])
                setPosTetris2([0,15.3 - offset*100,0])
                setPosTetris3([0,24.1 - offset*100,0])
                setPosTetris4([0,32.9 - offset*100,0])
                setPosTetris5([0,41.5 - offset*100,0])
                setPosTetris6([0,50.3 - offset*100,0])
                setPosTetris7([0,59.1 - offset*100,0])

                setScaleTetris1(2 - offset*4)
                setScaleTetris2(2 - (offset - 0.0875)*4)

            } else if(offset < .475){
                setPosTetris1([0,-32.2,0])

                setPosTetris3([0,24.1 - offset*100,0])
                setPosTetris4([0,32.9 - offset*100,0])
                setPosTetris5([0,41.5 - offset*100,0])
                setPosTetris6([0,50.3 - offset*100,0])
                setPosTetris7([0,59.1 - offset*100,0])

                setScaleTetris1(2 - 0.3875*4)


                if(offset < 0.518){
                    setPosTetris2([0,15.3 - offset*100,0])
                    setScaleTetris2(2 - (offset - 0.0875)*4)
                } else { 
                    setPosTetris2([0,15.3 - offset*100,0])
                    setScaleTetris2(2 - (offset - 0.0875)*4)
                }

                setScaleTetris3(2 - (offset - 0.0875 * 2)*4)


            } else if(offset < 0.5625){
                setPosTetris2([0,-32.2,0])

                setPosTetris3([0,24.1 - offset*100,0])
                setPosTetris4([0,32.9 - offset*100,0])
                setPosTetris5([0,41.5 - offset*100,0])
                setPosTetris6([0,50.3 - offset*100,0])
                setPosTetris7([0,59.1 - offset*100,0])

                setScaleTetris2(2 - 0.3875*4)
                setScaleTetris3(2 - (offset - 0.0875 * 2)*4)
                setScaleTetris4(2 - (offset - 0.0875 * 3)*4)


            } else if(offset < 0.65){
                setPosTetris3([0,-32.2,0])

                setPosTetris4([0,32.9 - offset*100,0])
                setPosTetris5([0,41.5 - offset*100,0])
                setPosTetris6([0,50.3 - offset*100,0])
                setPosTetris7([0,59.1 - offset*100,0])

                setScaleTetris3(2 - 0.3875*4)
                setScaleTetris4(2 - (offset - 0.0875 * 3)*4)
                setScaleTetris5(2 - (offset - 0.0875 * 4)*4)

            } else if(offset < 0.7375){
                setPosTetris4([0,-32.2,0])

                setPosTetris5([0,41.5 - offset*100,0])
                setPosTetris6([0,50.3 - offset*100,0])
                setPosTetris7([0,59.1 - offset*100,0])

                setScaleTetris4(2 - 0.3875*4)
                setScaleTetris5(2 - (offset - 0.0875 * 4)*4)
                setScaleTetris6(2 - (offset - 0.0875 * 5)*4)

            } else if(offset < 0.825){
                setPosTetris5([0,-32.2,0])

                setPosTetris6([0,50.3 - offset*100,0])
                setPosTetris7([0,59.1 - offset*100,0])

                setScaleTetris5(2 - 0.3875*4)
                setScaleTetris6(2 - (offset - 0.0875 * 5)*4)
                setScaleTetris7(2 - (offset - 0.0875 * 6)*4)

            } else if(offset < 0.9125){
                setPosTetris6([0,-32.2,0])

                setPosTetris7([0,59.1 - offset*100,0])
                
                setScaleTetris6(2 - 0.3875*4)
                setScaleTetris7(2 - (offset - 0.0875 * 6)*4)

                setScaleTetris1(2 - 0.3875*4)
                setScaleTetris2(2 - 0.3875*4)
                setScaleTetris3(2 - 0.3875*4)
                setScaleTetris4(2 - 0.3875*4)
                setScaleTetris5(2 - 0.3875*4)
                setPosPilar([0,-40,-0.5])
                setScaleCourses(0.4)

            } else {
                setPosTetris7([0,-32.2,0])
                setScaleTetris7(2 - 0.3875*4)

                setRotCourses([Math.PI/9 - ((Math.PI/9) * (offset - 0.9125) * 9), ((Math.PI) * (offset - 0.9125) * 11.5),0])
                setPosCourses([0,(offset - 0.9125) * 10 * 6,-10])
 
                setScaleTetris1((offset - 0.83) * 5.5)
                setScaleTetris2((offset - 0.83) * 5.5)
                setScaleTetris3((offset - 0.83) * 5.5)
                setScaleTetris4((offset - 0.83) * 5.5)
                setScaleTetris5((offset - 0.83) * 5.5)
                setScaleTetris6((offset - 0.83) * 5.5)
                setScaleTetris7((offset - 0.83) * 5.5)

                setScaleCourses((offset - 0.84) * 5.5)
                setPosPilar([0,-40 - (offset - 0.9125)*20, -0.5 + (offset - 0.9125)*12])
            }
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
                {/* <mesh receiveShadow castShadow rotation-x={Math.PI/2 + Math.PI/34} position={[0, -22.2, 0]}>
                    <torusGeometry args={[radiusPortal, 0.1, 20, 110, Math.PI * 2]}/>
                    <meshStandardMaterial color="yellow" envMapIntensify={0.5} opacity={0.1}/>
    </mesh>*/}
                <group rotation={rotCourses} position={posCourses}>
                    <Tetris1 position={posTetris1} rotation={[0,-Math.PI/2,0]} scale={scaleTetris1}/>
                    <Tetris2 position={posTetris2} rotation={[0,-Math.PI/2,0]} scale={scaleTetris2}/>
                    <Tetris3 position={posTetris3} rotation={[0,-Math.PI/2,0]} scale={scaleTetris3}/>
                    <Tetris4 position={posTetris4} rotation={[0,-Math.PI/2,0]} scale={scaleTetris4}/>
                    <Tetris5 position={posTetris5} rotation={[0,-Math.PI/2,0]} scale={scaleTetris5}/>
                    <Tetris6 position={posTetris6} rotation={[0,-Math.PI/2,0]} scale={scaleTetris6}/>
                    <Tetris7 position={posTetris7} rotation={[0,-Math.PI/2,0]} scale={scaleTetris7}/>
                    <mesh position={[0, posPilar[1],posPilar[2]]}>
                        <cylinderGeometry args={[scaleCourses*10, scaleCourses*10, 10, 64]}/>
                        <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.5} metalness={0}/>
                </mesh>
                </group>
            </group>
    </>
    )
}