import { Environment, OrbitControls, Stars, GizmoHelper, Sky, GizmoViewport, RoundedBox, Text3D, PerspectiveCamera, ScrollControls, useScroll, Box, Plane } from '@react-three/drei'
import { Model as WorkModel } from "../../models/Work"
import { Model as RocketModel } from "../../models/RocketComponent"
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { useEffect, useRef, useState, Suspense } from 'react'

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

import { Model as FrameModel } from '../../models/ProfileAsteroid'
import { Model as ReactModel} from '../../models/React'
import {Model as Earth} from '../../models/EarthWork'
import { Model as Java } from '../../models/technologies/java'
import { Model as Python } from '../../models/technologies/python'
import { Model as C } from '../../models/technologies/c'
import { Model as Swift } from '../../models/technologies/swift'
import { Model as Matlab } from '../../models/technologies/matlab'
import { Model as Php } from '../../models/technologies/php'
import { Model as Js } from '../../models/technologies/js'
import { Model as ReactModel2 } from '../../models/technologies/react'
import { Model as Nodejs } from '../../models/technologies/nodejs'
import { Model as Express } from '../../models/technologies/express'
import { Model as DB } from '../../models/technologies/db'
import { Model as Mongo } from '../../models/technologies/mongo'
import { Model as Mysql } from '../../models/technologies/mysql'
import { Model as Graphql } from '../../models/technologies/graphql'
import { Model as D3s } from '../../models/technologies/3Ds'
import { Model as Unity } from '../../models/technologies/Unity'
import { Model as ThreeJS } from '../../models/technologies/Three'
import { Model as Fusion } from '../../models/technologies/Fusion'
import { Model as Spaceship } from '../../models/technologies/spaceship'



export const WorkScene = () => {
    return(
        <>
            <Environment preset="forest" blur={0.4}/>
            <ambientLight intensity={0.3}/>

            <group position={[0,0,0]}>
                <ScrollControls pages={6}>
                    <Physics gravity={[0, -10, 0]}>
                        <Debug color="black" scale={1}>
                            <WorkStation/>
                        </Debug>
                    </Physics>
                </ScrollControls>
            </group>
            
        </>
    )
}

function Ground({ color, ...props }) {
    const [ref] = usePlane(() => ({ type:"static", ...props }), useRef(null))
  
    return (
      <Plane args={[10, 10]} ref={ref}>
        <meshPhongMaterial transparent envMapIntensify={0.5} opacity={0} wireframe={false}/>
      </Plane>
    )
  }
const Crate = ({position, hit, urlImage}) => {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, position }), useRef(null))
    const texture_1 = useLoader(TextureLoader, urlImage);


    useEffect(()=>{
        if(hit == true){
            console.log(hit)
            api.applyImpulse([0, -5, -20], [0, -1, 0])
        }
    },[hit])


    return ( 
      <Box
        args={[1, 1, 1]}
        ref={ref}
      >      
        <Suspense fallback={null}>
            <meshStandardMaterial roughness={0.5} metalness={0} map={texture_1} attachArray="material"  />
        </Suspense>
      </Box>
    )
  } 

const WorkStation = () => {
    const scroll = useScroll()
    const refROT = useRef(null)
    const [posRocket, setPosRocket] = useState([0,0,0])
    const [rotRocket, setRotRocket] = useState([0,0,0])
    const [hit, setHit] = useState(false)

    const [javascriptRotation, setJavascriptRotation] = useState([0,0,0])
    const [javascriptPos, setJavascriptPos] = useState([0,-2,0])

    const [dbPos, setDBPos] = useState([0,0,280])
    const [pythonPos, setPythonPos] = useState([0,0,220])
    const [extraTechPos, setExtraTechPos] = useState([0,0,250])
    const [otherTech, setOtherTech] = useState([0,0,190])

    const [mongoRot, setMongoRot] = useState([0,0,0])

    const [scaleSpaceship, setScaleSpaceShip] = useState(0)
    const [scaleEarth, setScaleEarth] = useState(0)
    const [rotationEarth, setRotationEarth] = useState(0)
    const [posEarth, setPosEarth] = useState([0,0,20])

    useFrame((state, delta) => {
        const offset = scroll.offset
        
        state.camera.position.set(0, 0, 400 - offset * 500)
        refROT.current.position.y =  -0.4 
        refROT.current.position.z = 400 - offset * 500 - 2
        setPosRocket([0, -0.4, 400 - offset * 500 - 2])

        state.camera.rotation.set(0,0,0)
        setRotRocket([0,0,-Math.PI * offset])

        if(offset > 0.05 && !hit){
            setHit(true)
        } else if (offset < 0.15){
            setJavascriptPos([0,-15 + offset*100,0])
            setDBPos([15 - offset*85,15 - offset*85,280])
            setExtraTechPos([0,- 16 + offset*70,250])
            setPythonPos([- 20 + offset*70,20 - offset*70,220])
        } else if(offset < 0.35) {
            setDBPos([15 - offset*85,15 - offset*85,280])
            setExtraTechPos([0,- 16 + offset*70,250])
            setPythonPos([- 20 + offset*70,20 - offset*70,220])
        }

        if(offset*4 < Math.PI/2){
            setRotationEarth(offset*4)
        } else {
            setRotationEarth(Math.PI/2)
        }

                // CAMBIAR
        setOtherTech([ -1, 60 - offset*170,0 + offset*400])
        setScaleSpaceShip(offset*2)
        setScaleEarth(offset*2)
        setPosEarth([0,0,20 + offset * 100])

        setJavascriptRotation([0, 0, javascriptRotation[2]+0.002])
        
        setMongoRot([0, mongoRot[1] - 0.005, 0])
    })


    
    return (
        <>
                    <RocketModel rotation={[-Math.PI/2 + Math.PI / 20,0,0]} refa={refROT}/>
                    <group rotation={rotRocket}>
                        {/*<WorkModel position={[0,0,0]} rotation={[0,0,0]}/>*/}
                        {!hit && <Ground position={[0, -3, 365]} rotation={[-Math.PI / 2, 0, 0]} />}
                        <FrameModel position={[0, 0.5, 370]} rotation={[-Math.PI/2,-Math.PI/2,0]} scale={10}/>

                        {/*<FrameModel position={[0, -4.5, 370]} rotation={[0,Math.PI/2,0]} scale={5}/>   FIRST */}
                        <Ground  position={[-3, 2, 365]} rotation={[0, Math.PI/2, 0]} />
                        <Ground  position={[3, 2, 365]} rotation={[0, - Math.PI/2, 0]} />
                        <Ground position={[0, 4.1, 365]} rotation={[Math.PI/2,0, 0]} />

                        <Crate position={[2.5, -2.5, 370]} hit={hit} urlImage={'/textures/56.png'}/>
                        <Crate position={[1.5, -2.5, 370]} hit={hit} urlImage={'/textures/46.png'}/>
                        <Crate position={[0.5, -2.5, 370]} hit={hit} urlImage={'/textures/36.png'}/>
                        <Crate position={[-0.5, -2.5, 370]} hit={hit} urlImage={'/textures/26.png'}/>
                        <Crate position={[-1.5, -2.5, 370]} hit={hit} urlImage={'/textures/16.png'}/>
                        <Crate position={[-2.5, -2.5, 370]} hit={hit} urlImage={'/textures/06.png'}/>

                        <Crate position={[2.5, -1.5, 370]} hit={hit} urlImage={'/textures/55.png'}/>
                        <Crate position={[1.5, -1.5, 370]} hit={hit} urlImage={'/textures/45.png'}/>
                        <Crate position={[0.5, -1.5, 370]} hit={hit} urlImage={'/textures/35.png'}/>
                        <Crate position={[-0.5, -1.5, 370]} hit={hit} urlImage={'/textures/25.png'}/>
                        <Crate position={[-1.5, -1.5, 370]} hit={hit} urlImage={'/textures/15.png'}/>
                        <Crate position={[-2.5, -1.5, 370]} hit={hit} urlImage={'/textures/05.png'}/>

                        <Crate position={[2.5, -0.5, 370]} hit={hit} urlImage={'/textures/54.png'}/>
                        <Crate position={[1.5, -0.5, 370]} hit={hit} urlImage={'/textures/44.png'}/>
                        <Crate position={[0.5, -0.5, 370]} hit={hit} urlImage={'/textures/34.png'}/>
                        <Crate position={[-0.5, -0.5, 370]} hit={hit} urlImage={'/textures/24.png'}/>
                        <Crate position={[-1.5, -0.5, 370]} hit={hit} urlImage={'/textures/14.png'}/>
                        <Crate position={[-2.5, -0.5, 370]} hit={hit} urlImage={'/textures/04.png'}/>

                        <Crate position={[2.5, 0.5, 370]} hit={hit} urlImage={'/textures/53.png'}/>
                        <Crate position={[1.5, 0.5, 370]} hit={hit} urlImage={'/textures/43.png'}/>
                        <Crate position={[0.5, 0.5, 370]} hit={hit} urlImage={'/textures/33.png'}/>
                        <Crate position={[-0.5, 0.5, 370]} hit={hit} urlImage={'/textures/23.png'}/>
                        <Crate position={[-1.5, 0.5, 370]} hit={hit} urlImage={'/textures/13.png'}/>
                        <Crate position={[-2.5, 0.5, 370]} hit={hit} urlImage={'/textures/03.png'}/>

                        <Crate position={[2.5, 1.5, 370]} hit={hit} urlImage={'/textures/52.png'}/>
                        <Crate position={[1.5, 1.5, 370]} hit={hit} urlImage={'/textures/42.png'}/>
                        <Crate position={[0.5, 1.5, 370]} hit={hit} urlImage={'/textures/32.png'}/>
                        <Crate position={[-0.5, 1.5, 370]} hit={hit} urlImage={'/textures/22.png'}/>
                        <Crate position={[-1.5, 1.5, 370]} hit={hit} urlImage={'/textures/12.png'}/>
                        <Crate position={[-2.5, 1.5, 370]} hit={hit} urlImage={'/textures/02.png'}/>

                        
                        <Crate position={[2.5, 2.5, 370]} hit={hit} urlImage={'/textures/51.png'}/>
                        <Crate position={[1.5, 2.5, 370]} hit={hit} urlImage={'/textures/41.png'}/>
                        <Crate position={[0.5, 2.5, 370]} hit={hit} urlImage={'/textures/31.png'}/>
                        <Crate position={[-0.5, 2.5, 370]} hit={hit} urlImage={'/textures/21.png'}/>
                        <Crate position={[-1.5, 2.5, 370]} hit={hit} urlImage={'/textures/11.png'}/>
                        <Crate position={[-2.5, 2.5, 370]} hit={hit} urlImage={'/textures/01.png'}/>

                        
                        <Crate position={[2.5, 3.5, 370]} hit={hit} urlImage={'/textures/50.png'}/>
                        <Crate position={[1.5, 3.5, 370]} hit={hit} urlImage={'/textures/40.png'}/>
                        <Crate position={[0.5, 3.5, 370]} hit={hit} urlImage={'/textures/30.png'}/>
                        <Crate position={[-0.5, 3.5, 370]} hit={hit} urlImage={'/textures/20.png'}/>
                        <Crate position={[-1.5, 3.5, 370]} hit={hit} urlImage={'/textures/10.png'}/>
                        <Crate position={[-2.5, 3.5, 370]} hit={hit} urlImage={'/textures/00.png'}/>

                        {/*  ASTEROIDS  */}
                        <Text3D position={[-11, 3, 310]} letterSpacing={0.1} size={2.5} font="/Inter_Bold.json">
                            Technologies
                            <meshStandardMaterial color="#fff" />
                        </Text3D>
                        <group rotation={javascriptRotation} position={javascriptPos}>
                            <Java  position={[0, 5, 320]} scale={2} rotation={[-Math.PI/2,-Math.PI,0]}/> {/*  React  */}
                            <Python  position={[0, -5, 320]} scale={2} rotation={[-Math.PI/2,-Math.PI,0]}/> {/*  Node  */}
                            <C  position={[4, 2.5, 320]} scale={2} rotation={[-Math.PI/2,-Math.PI/2 - Math.PI/4,0]}/> {/*  Redux  */}
                            <Swift  position={[4, -2.5, 320]} scale={2} rotation={[-Math.PI/2,-Math.PI/3,0]}/> {/*  Tree.js  */}
                            <Matlab  position={[-4, 2.5, 320]} scale={2} rotation={[-Math.PI/2,Math.PI/3 + Math.PI/4,0]}/> {/*  CSS  */}
                            <Php  position={[-4, -2.5, 320]} scale={2} rotation={[-Math.PI/2,Math.PI/4,0]}/> {/*  Material UI */}
                        </group>

                        <group position={dbPos}>
                            <Js position={[0,0,-1.02]} scale={3} rotation={[-Math.PI/2,Math.PI - Math.PI/6,Math.PI]}/>   {/*  Databases  */}
                            <group rotation={mongoRot}>
                                <Nodejs position={[5,0,0]} scale={1.5} rotation={[Math.PI/2,-Math.PI/16,0]}/>   {/*  MongoDB  */}
                            </group>
                            <group rotation={[-Math.PI/2 - mongoRot[1],0,0]}>
                                <ReactModel2 position={[0,5,0]} scale={1.5} rotation={[-Math.PI/2,0,0]} />   {/*  MySQL  */}
                            </group>
                            <group rotation={[0,0,Math.PI/4]}>
                                <group rotation={[0,-Math.PI/2 + mongoRot[1],0]}>
                                    <Express position={[5,0,0]}  scale={1.5} rotation={[-Math.PI/2,Math.PI,Math.PI]}/>   {/*  GraphQL  */}
                                </group>
                            </group> 
                        </group>

                        <group position={pythonPos}>
                        <D3s position={[0,0,-1.02]} scale={3} rotation={[-Math.PI/2,Math.PI - Math.PI/6,Math.PI]}/>   {/*  Databases  */}
                            <group rotation={mongoRot}>
                                <ThreeJS position={[5,0,0]} scale={1.5} rotation={[Math.PI/2,-Math.PI/16,0]}/>   {/*  MongoDB  */}
                            </group>
                            <group rotation={[-Math.PI/2 - mongoRot[1],0,0]}>
                                <Unity position={[0,5,0]} scale={1.5} rotation={[-Math.PI/2,0,0]} />   {/*  MySQL  */}
                            </group>
                            <group rotation={[0,0,Math.PI/4]}>
                                <group rotation={[0,-Math.PI/2 + mongoRot[1],0]}>
                                    <Fusion position={[5,0,0]}  scale={1.5} rotation={[-Math.PI/2,Math.PI,Math.PI]}/>   {/*  GraphQL  */}
                                </group>
                            </group> 
                        </group>

                        <group position={extraTechPos} rotation={[0,0,Math.PI/8]}>
                            <DB position={[0,0,2.04]}  scale={3} rotation={[-Math.PI/2,Math.PI/2 + Math.PI/4,0]}/>   {/*  Python  */}
                            <group rotation={mongoRot}>
                                <Mongo position={[5,0,0]} scale={1.5} rotation={[Math.PI/2,-Math.PI/16,0]}/>   {/*  Flask  */}
                            </group>
                            <group rotation={[-Math.PI/2 - mongoRot[1],0,0]}>
                                <Graphql position={[0,5,0]} scale={1.5} rotation={[-Math.PI/2,0,0]} />   {/*  Tensorflow  */}
                            </group>
                            <group rotation={[0,0,Math.PI/4]}>
                                <group rotation={[0,-Math.PI/2 + mongoRot[1],0]}>
                                    <Mysql position={[4.5,0,0]}  scale={1.5} rotation={[-Math.PI/2,Math.PI,0]}/>   {/*  GraphQL  */}
                                </group>
                            </group> 
                        </group>

                        <group position={otherTech}>
                            <Spaceship scale={scaleSpaceship} rotation={[Math.PI/8,0,0]}/>
                        </group>

                        {/* WORK EXPERIENCE */}
                        <group position={posEarth} rotation={[0,rotationEarth,0]} scale={scaleEarth}>
                            <Text3D position={[-50,-5.5,0]} letterSpacing={0.1} rotation={[0,-Math.PI/2,Math.PI/2]} size={3} font="/Inter_Bold.json">
                                Work
                                <meshStandardMaterial color="#fff" />
                            </Text3D>
                            <Earth />
                        </group>


                        <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade speed={1}/>

                    </group>

        </>
    )
}

