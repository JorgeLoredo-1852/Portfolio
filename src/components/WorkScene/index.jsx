import { Environment, OrbitControls, Stars, GizmoHelper, Sky, GizmoViewport, RoundedBox, Text3D, PerspectiveCamera, ScrollControls, useScroll, Box, Plane } from '@react-three/drei'
import { Model as WorkModel } from "../../models/Work"
import { Model as RocketModel } from "../../models/RocketComponent"
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { useEffect, useRef, useState, Suspense } from 'react'
import { Model as FrameModel } from '../../models/CubesAsteroid'

import { TextureLoader } from 'three/src/loaders/TextureLoader.js';


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
const Crate = ({position, hit}) => {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, position }), useRef(null))
    const texture_1 = useLoader(TextureLoader, '/dice1.png');


    useEffect(()=>{
        if(hit == true){
            console.log(hit)
            api.applyImpulse([0, 5, -20], [0, -2, 0])
        }
    },[hit])


    return (
      <Box
        args={[1, 1, 1]}
        ref={ref}
      >      
        <Suspense fallback={null}>
            <meshStandardMaterial map={texture_1} attachArray="material"  />
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

                        <Crate position={[2.5, -2.5, 350]} hit={hit}/>
                        <Crate position={[1.5, -2.5, 350]} hit={hit}/>
                        <Crate position={[0.5, -2.5, 350]} hit={hit}/>
                        <Crate position={[-0.5, -2.5, 350]} hit={hit}/>
                        <Crate position={[-1.5, -2.5, 350]} hit={hit}/>
                        <Crate position={[-2.5, -2.5, 350]} hit={hit}/>

                        <Crate position={[2.5, -1.5, 350]} hit={hit}/>
                        <Crate position={[1.5, -1.5, 350]} hit={hit}/>
                        <Crate position={[0.5, -1.5, 350]} hit={hit}/>
                        <Crate position={[-0.5, -1.5, 350]} hit={hit}/>
                        <Crate position={[-1.5, -1.5, 350]} hit={hit}/>
                        <Crate position={[-2.5, -1.5, 350]} hit={hit}/>

                        <Crate position={[2.5, -0.5, 350]} hit={hit}/>
                        <Crate position={[1.5, -0.5, 350]} hit={hit}/>
                        <Crate position={[0.5, -0.5, 350]} hit={hit}/>
                        <Crate position={[-0.5, -0.5, 350]} hit={hit}/>
                        <Crate position={[-1.5, -0.5, 350]} hit={hit}/>
                        <Crate position={[-2.5, -0.5, 350]} hit={hit}/>

                        <Crate position={[2.5, 0.5, 350]} hit={hit}/>
                        <Crate position={[1.5, 0.5, 350]} hit={hit}/>
                        <Crate position={[0.5, 0.5, 350]} hit={hit}/>
                        <Crate position={[-0.5, 0.5, 350]} hit={hit}/>
                        <Crate position={[-1.5, 0.5, 350]} hit={hit}/>
                        <Crate position={[-2.5, 0.5, 350]} hit={hit}/>

                        <Crate position={[2.5, 1.5, 350]} hit={hit}/>
                        <Crate position={[1.5, 1.5, 350]} hit={hit}/>
                        <Crate position={[0.5, 1.5, 350]} hit={hit}/>
                        <Crate position={[-0.5, 1.5, 350]} hit={hit}/>
                        <Crate position={[-1.5, 1.5, 350]} hit={hit}/>
                        <Crate position={[-2.5, 1.5, 350]} hit={hit}/>

                        
                        <Crate position={[2.5, 2.5, 350]} hit={hit}/>
                        <Crate position={[1.5, 2.5, 350]} hit={hit}/>
                        <Crate position={[0.5, 2.5, 350]} hit={hit}/>
                        <Crate position={[-0.5, 2.5, 350]} hit={hit}/>
                        <Crate position={[-1.5, 2.5, 350]} hit={hit}/>
                        <Crate position={[-2.5, 2.5, 350]} hit={hit}/>

                        
                        <Crate position={[2.5, 3.5, 350]} hit={hit}/>
                        <Crate position={[1.5, 3.5, 350]} hit={hit}/>
                        <Crate position={[0.5, 3.5, 350]} hit={hit}/>
                        <Crate position={[-0.5, 3.5, 350]} hit={hit}/>
                        <Crate position={[-1.5, 3.5, 350]} hit={hit}/>
                        <Crate position={[-2.5, 3.5, 350]} hit={hit}/>

                        <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade speed={1}/>
                    </group>

        </>
    )
}

