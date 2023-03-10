import { Grid } from "@mui/material"
import { Environment, useGLTF, SpotLight, useDepthBuffer, useProgress, useAnimations, OrbitControls, Sparkles, Stars, GizmoHelper, Sky, GizmoViewport, RoundedBox, Text3D, PerspectiveCamera, ScrollControls, useScroll, Box, Plane } from '@react-three/drei'
import { useEffect, useState, useRef, Suspense } from "react"
import * as THREE from "three"
import { useInView } from "react-intersection-observer";

import { Canvas, useFrame, useThree } from '@react-three/fiber'

import {Model as Portal} from '../../models/home/Portal'

import {Model as Tetris1} from "../../models/home/Tetris1"
import {Model as Tetris2} from "../../models/home/Tetris2"
import {Model as Tetris3} from "../../models/home/Tetris3"
import {Model as Tetris4} from "../../models/home/Tetris4"
import {Model as Tetris5} from "../../models/home/Tetris5"
import {Model as Tetris6} from "../../models/home/Tetris6"
import {Model as Tetris7} from "../../models/home/Tetris7"
import {Model as TetrisPlane} from "../../models/home/TetrisPlane"
import {Model as TetrisMissingOne} from "../../models/home/TetrisPlane1"
import {Model as CubeBG} from "../../models/home/JustCube"

import {Model as Tardis} from "../../models/home/Tardis"
import {Model as Elevator} from "../../models/home/Elevator"
import { Model as Person } from "../../models/home/Person"
import { Model as PersonSit } from "../../models/home/PersonSit"
import { Model as PersonClap} from "../../models/home/SittingClap"
import { Model as Pedestal } from "../../models/home/Pedestal"
import { Model as PersonYell } from "../../models/home/Yell"
import { Model as PersonVictory } from "../../models/home/Victory"
import { Model as Computer } from "../../models/home/Computer"
import {Model as Disk1} from "../../models/home/Disk1"
import {Model as Disk2} from "../../models/home/Disk2"
import {Model as Disk3} from "../../models/home/Disk3"
import {Model as Placa1} from "../../models/home/Placa1"

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {JGx} from "../../components"
import {Model as Control2} from "../../models/home/Control2"
import {Model as Compu1} from "../../models/home/Compu1"
import {Model as Compu2} from "../../models/home/Compu2"
import {Model as Compu3} from "../../models/home/Compu3"
import {Model as Halo} from "../../models/home/Halo"
import {Model as Clone} from "../../models/home/StarWars"
import {Model as Ironman} from "../../models/home/Ironman"
import {Model as Car} from "../../models/home/Car"
import {Model as Nave} from "../../models/Rocket"
import {Model as Earth} from "../../models/Earth"
import {Model as Mario} from "../../models/home/Mario"

import {Model as Arrow} from "../../models/Arrow"

export const Roles = () => { 
    //const { ref, inView } = useInView();
    //const [viewRoles, setViewRoles] = useState(true)

    //useEffect(()=>{
    //    setViewRoles(!viewRoles)
    //}, [inView])
    //console.log(viewRoles)
    const { active, progress, errors, item, loaded, total } = useProgress()
    const [chargeComplete, setChargeComplete] = useState(false)
    
    useEffect(()=>{
        if(progress == 100){
            setChargeComplete(true)
        }
    }, [progress])

    return(
        <div style={{width:"100%", height:"100vh", backgroundColor:"black"}}>
            <JGx/>

                    <Canvas 
                    className='canvas' 
                    shadows
                    camera={{position: [0,0,40] , fov:15}}
                    color={"#000000"}
                    style={{zIndex:100}}
                >
                    <Suspense fallback={null}>
                        <ScrollControls pages={6}>
                            <RolesScene/>
                        </ScrollControls>
                    </Suspense>
                </Canvas>


        </div>        
    )
}

function MovingSpot({ vec = new THREE.Vector3(), ...props }) {
    const light = useRef()
    const viewport = useThree((state) => state.viewport)
    useFrame((state) => {
      light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
      light.current.target.updateMatrixWorld()
    })
    return <SpotLight castShadow ref={light} penumbra={0} distance={50} angle={0.3} attenuation={0} anglePower={1} intensity={4} {...props} />
  }

export const RolesScene = () => {
    const scroll = useScroll()
    const themeM = useTheme();
    const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
    const downMd = useMediaQuery(themeM.breakpoints.down('md'));
    const downSm = useMediaQuery(themeM.breakpoints.down('sm'));

    const [posScene, setPosScene] = useState(0)
    const [posTetris1, setPosTetris1] = useState([0,60,0])
    const [posTetris2, setPosTetris2] = useState([0,100,0])
    const [posTetris3, setPosTetris3] = useState([0,60,0])
    const [posTetris4, setPosTetris4] = useState([0,60,0])
    const [posTetris5, setPosTetris5] = useState([0,60,0])
    const [posTetris6, setPosTetris6] = useState([0,60,0])
    const [posTetris7, setPosTetris7] = useState([0,60,0])

    const [opacityText1, setOpacityText1] = useState(1)
    const [opacityText2, setOpacityText2] = useState(1)
    const [opacityText3, setOpacityText3] = useState(1)
    const [opacityText4, setOpacityText4] = useState(1)
    const [opacityText5, setOpacityText5] = useState(1)
    const [opacityText6, setOpacityText6] = useState(1)

    const [rotTetris1, setRotTetris1] = useState([0,-Math.PI/2,0])
    const [rotTetris2, setRotTetris2] = useState([0,-Math.PI/2,0])
    const [rotTetris3, setRotTetris3] = useState([0,-Math.PI/2,0])
    const [rotTetris4, setRotTetris4] = useState([0,-Math.PI/2,0])
    const [rotTetris5, setRotTetris5] = useState([0,-Math.PI/2,0])
    const [rotTetris6, setRotTetris6] = useState([0,-Math.PI/2,0])
    const [rotTetris7, setRotTetris7] = useState([0,-Math.PI/2,0])

    const [rotCourses, setRotCourses] = useState([0,0,0])
    const [posCourses, setPosCourses] = useState([0,-15,-20])
    const [posPortal, setPosPortal] = useState([0, -21, -20])
    const [hideTetrisLast, setHideTetrisLast] = useState(false)

    const [elevatorPos, setElevatorPos] = useState([-6,-6,1.5])
    const [railPos, setRailPos] = useState([0,- 13 - 15.8,0])
    const [rotPortal, setRotPortal] = useState([-Math.PI/2 -Math.PI/28,0,0])
    const [posText, setPosText] = useState([-2.9, -27, 10])
    const [posDisco1, setPosDisco1] = useState(downSm ? [4,-11.5,-0.3] : [12,-11.5,-0.3])
    const [posDisco2, setPosDisco2] = useState(downSm ? [18,-11.5,-0.3] : [26,-11.5,-0.3])
    const [posDisco3, setPosDisco3] = useState(downSm ? [32,-11.5,-0.3] : [40,-11.5,-0.3])
    const [posUSB1, setPosUSB1] = useState(downSm ? [4,-19.3,-0.3] : [12,-19.3,-0.3])
    const [posUSB2, setPosUSB2] = useState(downSm ? [18,-19.3,-0.3] : [26,-19.3,-0.3])
    const [posUSB3, setPosUSB3] = useState(downSm ? [32,-19.3,-0.3] : [40,-19.3,-0.3])

    const [showLights, setShowLights] = useState(true)

    const [diff, setDiff] = useState(0.04)

    const [video] = useState(
        () => Object.assign(document.createElement('video'), { src: "/home/matrix.mp4", crossOrigin: 'Anonymous', loop: true, muted: true})
    )

    useEffect(() => {
        video.play()
    }, [video])

    useEffect(()=>{
        if(window.screen.width <= 600){
            setShowLights(true)
            setDiff(0.032)
        } else if(window.screen.width > 600 && 1200 >= window.screen.width) {
            setShowLights(true)
            setDiff(0.028)
        } else if(window.screen.width > 1200 && window.screen.width <= 1400){
            setShowLights(true)
            setDiff(0.022)
        } else if(window.screen.width > 1400 && window.screen.width <= 1800) {
            setShowLights(false)
            setDiff(0.013)
        } else if(window.screen.width > 1800) {
            setShowLights(false)
            setDiff(0.010)
        }
    }, [window.screen.width])




    useFrame((state, delta) => {
        const offset = scroll.offset        
        if(offset > 0 && offset < 0.3){


            //setPosDisco1([ posDisco1[0] - diff, posDisco1[1], posDisco1[2]])
            //setPosDisco2([posDisco2[0] - diff, posDisco2[1], posDisco2[2]])
            //setPosDisco3([posDisco3[0] - diff, posDisco3[1], posDisco3[2]])
            //setPosUSB1([posUSB1[0] - diff, posUSB1[1], posUSB1[2]])
            //setPosUSB2([posUSB2[0] - diff, posUSB2[1], posUSB2[2]])
            //setPosUSB3([posUSB3[0] - diff, posUSB3[1], posUSB3[2]])
            //if(posDisco1[0] < -14){
            //   setPosDisco1([28, posDisco1[1], posDisco1[2]])
            //    setPosUSB1([28, posUSB1[1], posUSB1[2]])
            //} else if(posDisco2[0] < -14){
            //    setPosDisco2([28, posDisco2[1], posDisco2[2]])
            //    setPosUSB2([28, posUSB2[1], posUSB2[2]])
            //} else if(posDisco3[0] < -14){
            //    setPosDisco3([28, posDisco3[1], posDisco3[2]])
            //    setPosUSB3([28, posUSB3[1], posUSB3[2]])
            //}   
        }


        if(offset < 0.30){

            setPosText([-2.9, -27, 10])
            setPosScene(offset*90)
            setPosTetris1([0,60 - offset*280,0])
            setRotTetris1([0,-Math.PI/2 - offset*32.4,offset*32.4])

            setPosTetris2([0,80 - offset*280,0])
            setRotTetris2([0,-Math.PI/2 - offset*32.4,offset*32.4])


            if(offset < 0.12){
                setElevatorPos([-6, -6 -offset*40,1])
            }
            else if(offset > 0.12){
                setElevatorPos([-6, -offset*90,1])
            }

        } else if (offset > 0.3  && offset < 0.76){
                        setRotPortal([-Math.PI/2 -Math.PI/28,0,rotPortal[2] + 0.005])

            setPosText([-2.9, -27 + (offset - 0.30)*89, 10])
            setPosScene(0.3*90)
            
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

            setElevatorPos([-6, -0.3*90,1])
            setRailPos([0,-28.8,0])

            if(offset < 0.3365){
                setOpacityText1(8.519 - offset*25.3164)
            } else if(offset < 0.4155){
                setOpacityText2(10.516 - offset*25.3164)
            } else if(offset < 0.4952){
                setOpacityText3(12.516 - offset*25.3164)
            } else if(offset < 0.5745){
                setOpacityText4(14.516 - offset*25.3164)
            } else if(offset < 0.6535){
                setOpacityText5(16.516 - offset*25.3164)
            } else if(offset < 0.733){
                setOpacityText6(18.516 - offset*25.3164)
            }

        }  else if (offset > 0.76 & offset < 0.9){

            setPosText([-2.75, -27 + (offset - 0.30)*89, 10])


            setRotTetris7([0,-Math.PI/2 - offset*40.2,offset*40.15])
            setPosTetris7(downSm ? [((offset - 0.76) * 16),186.5 - 0.76*280,-20] : [((offset - 0.76) * 24),186.5 - 0.76*280,-20])

            setPosTetris1(downSm ? [-6,-109.5,0] : [-6,-70,0])
            setRotTetris1([0,-Math.PI/2, 0])
            
            setPosTetris2(downSm ? [3,-113.1,0] : [3,-73.6,0])
            setRotTetris2([0,-Math.PI/2, 0])

            setPosTetris3(downSm ? [4.8,-107.7,0] : [4.8,-68.2,0])
            setRotTetris3([0,-Math.PI/2, 0])

            setPosTetris4(downSm ? [-0.6,-104.1,0] : [-0.6,-64.6,0])
            setRotTetris4([0,-Math.PI/2, 0])

            setPosTetris5(downSm ? [4.8,-102.3,0] : [4.8,-62.8,0])
            setRotTetris5([0,-Math.PI/2, 0])

            setPosTetris6(downSm ? [-0.6,-98.7,0] : [-0.6,-59.2,0])
            setRotTetris6([0,-Math.PI/2, 0])

            setPosCourses(downSm ? [-0.7,-120 + offset*170,-20] : [-1.5,-120 + offset*170,-20])
            setHideTetrisLast(false)

            setPosPortal([0, -107.85713 + offset * 114.2857, -20])
            setRailPos([-6,-51.6+ offset*30,1.8])
        } else {
            setRotTetris7([0,-Math.PI/2, 0])
            setPosTetris7(downSm ? [4.8,-98.7,0] : [4.8,-59.2,0])

            setHideTetrisLast(true)

            setPosCourses(downSm ? [-0.7,-3 + offset*40,250 - offset * 300] : [-1.5,-21 + offset*60,250 - offset * 300])
            setRotCourses([0,-18 * Math.PI + 20 * Math.PI * offset,0])

            setElevatorPos([-6, 0 -  offset*30,1])

        }
    })

    const depthBuffer = useDepthBuffer({ frames: 1 })

    return (
    <>
            <ambientLight intensity={0.5} />
            <Environment preset="forest" blur={0.5}/>
            <group position={[0,posScene,0]}>

{
    showLights ? <></> : <><MovingSpot depthBuffer={depthBuffer}  color="white" position={[0, 0, 4]} />
            </>
}



                {/*  FIRST SECTION  */}


                <Control2 position={[0,-5,0]} scale={0.17}/>
                <Compu1 scale={4.8} position={[0,-5,-3.5]} rotation={[0,Math.PI,0]}/>
                <Compu2 scale={4.6} position={[-3.6,-5,-2.5]} rotation={[0,Math.PI + Math.PI/8,0]}/>
                <Compu3 scale={4.8} position={[3.6,-5,-2.5]} rotation={[0,Math.PI - Math.PI/8,0]}/>

                <Halo scale={0.35} position={[9.2,-0.7,-3]} rotation={[0,-Math.PI/4,0]}/>
                <Clone scale={0.055} position={[9.2,1.5,-3,5]} rotation={[0,-Math.PI/4,0]}/>
                <Ironman scale={0.38} position={[9,3.7,-2.8]} rotation={[0,-Math.PI/4,0]}/>
                <Car scale={0.8} position={[-9,4.3,-2]} rotation={[0,-Math.PI/4 + Math.PI/36,0]}/>
                <Nave scale={2} position={[-9,1.3,-3.8]} rotation={[0,Math.PI,0]}/>
                <Earth scale={0.04} position={[-9.8,1.8,-2.8]}/>
                <Mario scale={0.04} position={[-9.8,-0.45,-2.8]} rotation={[0,3*Math.PI/4,0]}/>
                

                <mesh receiveShadow castShadow scale={[100,30,1]}  position={[0,5,-12.5]}>
                    <boxBufferGeometry/>
                    <meshStandardMaterial color="#000000" envMapIntensify={0.5} opacity={0.1}/>
                </mesh>

                <mesh receiveShadow castShadow scale={[100,0.5,30]} position={[0,-5.2,-12.5]}>
                    <boxBufferGeometry/>
                    <meshStandardMaterial color="#000000" roughness={1} metalness={0}/>
                </mesh>


                {/*  ELEVATOR  */}

                <Tardis cast={showLights} scale={[0.7,0.7,0.7]} position={[-6, elevatorPos[1] + 0.25,1.4]}/>
                <Elevator cast={showLights} scale={0.7} position={[-6, railPos[1]+15.95, 1.4]}/>
                <Person cast={showLights} scale={1.1} position={[-6, elevatorPos[1] -1.5,1.4]}/>

                
                {/*  SECOND SECTION  */}


                <Computer  cast={showLights} position={downSm ? [-3.4,-11.5,0.5] : [0,-11.5,0.5]} scale={0.1}/>
                <Disk1 cast={showLights} position={posDisco1}/>
                <Disk2 cast={showLights} position={posDisco2}/>
                <Disk3 cast={showLights} position={posDisco3}/>

                <Placa1 cast={showLights} position={posUSB1}/>
                    <Text3D height={0.25} position={[posUSB1[0]-2.7, posUSB1[1]-0.33,posUSB1[2]-0.2]} letterSpacing={0.009} size={0.75} font="/Inter_Bold.json">
                        Front End
                        <meshPhongMaterial color="#fff" opacity={1} transparent />
                    </Text3D>
                <Placa1 cast={showLights} position={posUSB2}/>
                    <Text3D height={0.25} position={[posUSB2[0]-2.7, posUSB2[1]-0.33,posUSB2[2]-0.2]} letterSpacing={0.009} size={0.75} font="/Inter_Bold.json">
                        Back End
                        <meshPhongMaterial color="#fff" opacity={1} transparent />
                    </Text3D>
                <Placa1 cast={showLights} position={posUSB3}/>
                    <Text3D height={0.25} position={[posUSB3[0]-3.6, posUSB3[1]-0.33,posUSB3[2]-0.2]} letterSpacing={0.009} size={0.75} font="/Inter_Bold.json">
                        UI/UX Design
                        <meshPhongMaterial color="#fff" opacity={1} transparent />
                    </Text3D>



                {/*  THIRD SECTION  */}

                <mesh castShadow receiveShadow position={[0,posPortal[1]-12,-70]} scale={[70,50,1]}>
                    <planeGeometry />
                    <meshBasicMaterial>
                        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding}/> 
                    </meshBasicMaterial>
</mesh>

                <Portal position={downSm ? [0,posPortal[1],-20] : [0,posPortal[1]-1.2,-25]} scale={downSm ? 0.13 : 0.3} rotation={rotPortal}/>

                { 
                    !downMd ? 
                    <group position={posText}>
                        <Text3D height={0.25} position={[0,-0.1,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            Hi, my name is
                            <meshPhongMaterial color="#fff" opacity={opacityText1} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[0,-1.3,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            Jorge Loredo.
                            <meshPhongMaterial color="#fff" opacity={opacityText1} transparent />
                        </Text3D>

                        <Text3D height={0.25} position={[0,-7.1,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            I'm an undergrad
                            <meshPhongMaterial color="#fff" opacity={opacityText2} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[0,-8.3,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            Software Engineer
                            <meshPhongMaterial color="#fff" opacity={opacityText2} transparent />
                        </Text3D>

                        <Text3D height={0.25} position={[0,-14.1,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            who loves coding
                            <meshPhongMaterial color="#fff" opacity={opacityText3} transparent />
                        </Text3D>
                        <Text3D position={[0,-15.3,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            and innovating.
                            <meshPhongMaterial color="#fff" opacity={opacityText3} transparent />
                        </Text3D>

                        <Text3D height={0.25} position={[0,-21.1,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            I build websites
                            <meshPhongMaterial color="#fff" opacity={opacityText4} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[0,-22.3,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            and applications
                            <meshPhongMaterial color="#fff" opacity={opacityText4} transparent />
                        </Text3D>

                        <Text3D height={0.25} position={[0,-28.1,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            from design to
                            <meshPhongMaterial color="#fff" opacity={opacityText5} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[0,-29.3,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            deploy.
                            <meshPhongMaterial color="#fff" opacity={opacityText5} transparent />
                        </Text3D>

                        <Text3D height={0.25} position={[0,-35.1,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            Let's develop
                            <meshPhongMaterial color="#fff" opacity={opacityText6} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[0,-36.3,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            together.
                            <meshPhongMaterial color="#fff" opacity={opacityText6} transparent />
                        </Text3D>
                    </group> 
                    : 
                    <group position={[posText[0]+0.15, posText[1], posText[2]]}>
                        <Text3D height={0.25} position={[1.9,1.2,0]} letterSpacing={0.009} size={0.4} font="/Inter_Bold.json">
                            Hi, I'm
                            <meshPhongMaterial color="#fff" opacity={opacityText1} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[1.42,-0.1,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            Jorge
                            <meshPhongMaterial color="#fff" opacity={opacityText1} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[1.19,-1.1,0]} letterSpacing={0.009} size={0.65} font="/Inter_Bold.json">
                            Loredo
                            <meshPhongMaterial color="#fff" opacity={opacityText1} transparent />
                        </Text3D>


                        <Text3D height={0.25} position={[1.25,-6.8,0]} letterSpacing={0.009} size={0.25} font="/Inter_Bold.json">
                            I'm an undergrad
                            <meshPhongMaterial color="#fff" opacity={opacityText2} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[1.15,-7.8,0]} letterSpacing={0.009} size={0.5} font="/Inter_Bold.json">
                            Software
                            <meshPhongMaterial color="#fff" opacity={opacityText2} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[1.16,-8.6,0]} letterSpacing={0.009} size={0.5} font="/Inter_Bold.json">
                            Engineer
                            <meshPhongMaterial color="#fff" opacity={opacityText2} transparent />
                        </Text3D>


                        <Text3D height={0.25} position={[1.52,-14.1,0]} letterSpacing={0.009} size={0.35} font="/Inter_Bold.json">
                            who loves
                            <meshPhongMaterial color="#fff" opacity={opacityText3} transparent />
                        </Text3D>
                        <Text3D position={[1.38,-14.8,0]} letterSpacing={0.009} size={0.35} font="/Inter_Bold.json">
                            coding and
                            <meshPhongMaterial color="#fff" opacity={opacityText3} transparent />
                        </Text3D>
                        <Text3D position={[1.38,-15.5,0]} letterSpacing={0.009} size={0.35} font="/Inter_Bold.json">
                            innovating.
                            <meshPhongMaterial color="#fff" opacity={opacityText3} transparent />
                        </Text3D>


                        <Text3D height={0.25} position={[2,-21.1,0]} letterSpacing={0.009} size={0.35} font="/Inter_Bold.json">
                            I build
                            <meshPhongMaterial color="#fff" opacity={opacityText4} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[1.1,-21.8,0]} letterSpacing={0.009} size={0.35} font="/Inter_Bold.json">
                            websites and
                            <meshPhongMaterial color="#fff" opacity={opacityText4} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[1.25,-22.5,0]} letterSpacing={0.009} size={0.35} font="/Inter_Bold.json">
                            applications
                            <meshPhongMaterial color="#fff" opacity={opacityText4} transparent />
                        </Text3D>

                        <Text3D height={0.25} position={[1.29,-28.4,0]} letterSpacing={0.009} size={0.35} font="/Inter_Bold.json">
                            from design 
                            <meshPhongMaterial color="#fff" opacity={opacityText5} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[1.5,-29.1,0]} letterSpacing={0.009} size={0.35} font="/Inter_Bold.json">
                            to deploy.
                            <meshPhongMaterial color="#fff" opacity={opacityText5} transparent />
                        </Text3D>





                        <Text3D height={0.25} position={[2,-35.2,0]} letterSpacing={0.009} size={0.4} font="/Inter_Bold.json">
                            Let's
                            <meshPhongMaterial color="#fff" opacity={opacityText6} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[1,-36.1,0]} letterSpacing={0.009} size={0.63} font="/Inter_Bold.json">
                            develop
                            <meshPhongMaterial color="#fff" opacity={opacityText6} transparent />
                        </Text3D>
                        <Text3D height={0.25} position={[1.5,-36.9,0]} letterSpacing={0.009} size={0.4} font="/Inter_Bold.json">
                            together.
                            <meshPhongMaterial color="#fff" opacity={opacityText6} transparent />
                        </Text3D>
                    </group>
                }
                
                    {!hideTetrisLast ?  <Tetris7 position={posTetris7} rotation={rotTetris7} scale={ downSm ? 1.8 * 0.6 : 1.8}/> : <></>}

                    <group rotation={rotCourses} position={posCourses} scale={downSm ? 0.6 : 1}>           

                            <Tetris1 position={posTetris1} rotation={rotTetris1} scale={1.8}/>
                            <Tetris2 position={posTetris2} rotation={rotTetris2} scale={1.8}/>
                            <Tetris3 position={posTetris3} rotation={rotTetris3} scale={1.8}/>
                            <Tetris4 position={posTetris4} rotation={rotTetris4} scale={1.8}/>
                            <Tetris5 position={posTetris5} rotation={rotTetris5} scale={1.8}/>
                            <Tetris6 position={posTetris6} rotation={rotTetris6} scale={1.8}/>
                            {hideTetrisLast ?  <Tetris7 position={posTetris7} rotation={rotTetris7} scale={1.8}/> : <></>}
                            {hideTetrisLast  ?  <TetrisPlane position={[posTetris7[0]-3.6,posTetris7[1]-7.2,posTetris7[2]-0.41]} rotation={rotTetris7} scale={1.8}/> : <></>}
                            {!hideTetrisLast && posTetris1[1] <= -70 ? <TetrisMissingOne position={[posTetris1[0]+7.2,posTetris1[1]+3.6,posTetris1[2] - 0.41]} rotation={rotTetris1} scale={1.8}/> : <></>}

                            {!downSm ? <><PersonVictory scale={4} position={[13, -75.5,2]}/><PersonYell scale={4} position={[-4.8, -58.9,0.6]}/></> : <><PersonClap scale={7.5} position={[1.2, -123.7,10]}/><PersonSit scale={7.2} position={[5.9, -120.2,8]}/><PersonYell scale={7.2} position={[-3.8, -120.2,8]}/></>}
                            {downSm ? <Pedestal position={[1.5,-115,0]}/> : <mesh position={downSm ? [1.5,-122.3,0]:[1.5,-80.5,0]}>
                                <cylinderGeometry args={[16,16,downSm ? 15 :  10, 64]}/>
                                <meshStandardMaterial color="#1D0060" roughness={0.3} metalness={0}/>
                            </mesh>}
                    </group>
            </group>
    </>
    )
}