import { Environment, OrbitControls, Stars, GizmoHelper, Sky, GizmoViewport, RoundedBox, Text3D, PerspectiveCamera, ScrollControls, useScroll, Box, Plane } from '@react-three/drei'
import { Model as WorkModel } from "../../models/Work"
import { Model as RocketModel } from "../../models/RocketComponent"
import { Canvas, useFrame } from '@react-three/fiber'

import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { useRef, useState } from 'react'
import { Model as FrameModel } from '../../models/CubesAsteroid'

export const WorkScene = () => {
    return(
        <>
            <ambientLight intensity={0.5}/>
            <Environment preset="forest" blur={0.5}/>
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
    const [ref] = usePlane(() => ({ ...props }), useRef(null))
  
    return (
      <Plane args={[10, 10]} ref={ref}>
        <meshStandardMaterial transparent envMapIntensify={0.5} opacity={0}/>
      </Plane>
    )
  }
const Crate = ({position}) => {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, position }), useRef(null))
    const scroll = useScroll()
    const [once, setOnce] = useState(true)

    useFrame((state, delta) => {
        const offset = scroll.offset
        
        if(offset > 0.08 && once){
            setOnce(false)
            api.applyImpulse([0, 5, -20], [0, -1, 0])
        }
    })

    return (
      <Box
        args={[1, 1, 1]}
        ref={ref}
      >
        <meshNormalMaterial />
      </Box>
    )
  }

const WorkStation = () => {
    const scroll = useScroll()
    const refROT = useRef(null)
    const [posRocket, setPosRocket] = useState([0,0,0])
    const [rotRocket, setRotRocket] = useState([0,0,0])
    const [hit, setHit] = useState(false)
    
    useFrame((state, delta) => {
        const offset = scroll.offset
        
        state.camera.position.set(0, 0, 400 - offset * 500)
        refROT.current.position.y =  -0.4 
        refROT.current.position.z = 400 - offset * 500 - 2
        setPosRocket([0, -0.4, 400 - offset * 500 - 2])

        state.camera.rotation.set(0,0,0)
        setRotRocket([0,0,-Math.PI * offset])

        if(offset > 0.08){
            setHit(true)
        }
    })


    
    return (
        <>
                    <RocketModel rotation={[-Math.PI/2 + Math.PI / 20,0,0]} refa={refROT}/>
                    <group rotation={rotRocket}>
                        {/*<WorkModel position={[0,0,0]} rotation={[0,0,0]}/>*/}
                        {!hit && <Ground position={[0, -3, 350]} rotation={[-Math.PI / 2, 0, 0]} />}
                        <Ground  position={[-3, 2, 350]} rotation={[0, Math.PI/2, 0]} />
                        <Ground  position={[3, 2, 350]} rotation={[0, - Math.PI/2, 0]} />
                        <Ground position={[0, 4.1, 350]} rotation={[Math.PI/2,0, 0]} />

                        <Crate position={[2.5, -2.5, 350]} />
                        <Crate position={[1.5, -2.5, 350]} />
                        <Crate position={[0.5, -2.5, 350]} />
                        <Crate position={[-0.5, -2.5, 350]} />
                        <Crate position={[-1.5, -2.5, 350]} />
                        <Crate position={[-2.5, -2.5, 350]} />

                        <Crate position={[2.5, -1.5, 350]} />
                        <Crate position={[1.5, -1.5, 350]} />
                        <Crate position={[0.5, -1.5, 350]} />
                        <Crate position={[-0.5, -1.5, 350]} />
                        <Crate position={[-1.5, -1.5, 350]} />
                        <Crate position={[-2.5, -1.5, 350]} />

                        <Crate position={[2.5, -0.5, 350]} />
                        <Crate position={[1.5, -0.5, 350]} />
                        <Crate position={[0.5, -0.5, 350]} />
                        <Crate position={[-0.5, -0.5, 350]} />
                        <Crate position={[-1.5, -0.5, 350]} />
                        <Crate position={[-2.5, -0.5, 350]} />

                        <Crate position={[2.5, 0.5, 350]} />
                        <Crate position={[1.5, 0.5, 350]} />
                        <Crate position={[0.5, 0.5, 350]} />
                        <Crate position={[-0.5, 0.5, 350]} />
                        <Crate position={[-1.5, 0.5, 350]} />
                        <Crate position={[-2.5, 0.5, 350]} />

                        <Crate position={[2.5, 1.5, 350]} />
                        <Crate position={[1.5, 1.5, 350]} />
                        <Crate position={[0.5, 1.5, 350]} />
                        <Crate position={[-0.5, 1.5, 350]} />
                        <Crate position={[-1.5, 1.5, 350]} />
                        <Crate position={[-2.5, 1.5, 350]} />

                        
                        <Crate position={[2.5, 2.5, 350]} />
                        <Crate position={[1.5, 2.5, 350]} />
                        <Crate position={[0.5, 2.5, 350]} />
                        <Crate position={[-0.5, 2.5, 350]} />
                        <Crate position={[-1.5, 2.5, 350]} />
                        <Crate position={[-2.5, 2.5, 350]} />

                        
                        <Crate position={[2.5, 3.5, 350]} />
                        <Crate position={[1.5, 3.5, 350]} />
                        <Crate position={[0.5, 3.5, 350]} />
                        <Crate position={[-0.5, 3.5, 350]} />
                        <Crate position={[-1.5, 3.5, 350]} />
                        <Crate position={[-2.5, 3.5, 350]} />

                        <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade speed={1}/>
                    </group>

        </>
    )
}

/*

const WorkStation = () => {
    const scroll = useScroll()
    
    const [posStation, setPosStation] = useState([0,0,0])
    const [rStation, setRStation] = useState([0,0,0])

    const [lastPos, setLastPos] = useState([0,0,0])
    const [lastPos2, setLastPos2] = useState([0,0,0])
    const [lastRt, setLastRt] = useState([0,0,0])
    
    useFrame((state, delta) => {
        const offset = scroll.offset
        if(offset <= 0.13){
            //if(offset <= 0.1){
            //    state.camera.position.set(-offset*200,40 - offset*300, 80 - offset*300)
            //} else {
            //    state.camera.position.set(-offset*200,40 - offset*350, 80 - offset*300)
            //}
            setPosStation([offset * 40, offset * 95, offset*150])
            setLastPos([offset * 40,offset * 95,offset*150])

            setRStation([-Math.PI/8 - offset,offset*2,0])
            setLastRt([-Math.PI/8 - offset,offset*2,0])
            //setLastPos([-offset*200, 50 - offset*300, 100 - offset*300])
            //state.camera.lookAt(0, 0, 0)
            //state.camera.lookAt(0, 0, 5)
            //state.camera.rotateY(-0.002)
        } else if(offset <= 0.2){
            setPosStation([lastPos[0] - offset*5, lastPos[1], lastPos[2]])
            setLastPos2([lastPos[0] - offset*5, lastPos[1], lastPos[2]])    
        } else if(offset <= 0.333) {
            console.log("AAAAAA")
            console.log(offset)
            setPosStation([lastPos[0] - offset * 30, lastPos2[1] , lastPos2[2]])

            //setLastPos([offset * 40,offset * 95,offset*150])
            //setRStation([-Math.PI/8 - offset,offset*2,0])
            //state.camera.position.set(lastPos[0] + offset*100, lastPos[1], lastPos[2])
            //state.camera.lookAt(0, 0, 0)
        }
        //state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    })
    
    return (
        <>
            <WorkModel position={posStation} rotation={rStation}/>
        </>
    )
}

*/