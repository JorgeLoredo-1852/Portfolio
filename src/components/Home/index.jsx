import { Grid } from "@mui/material"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, Stars, GizmoHelper, GizmoViewport, RoundedBox } from '@react-three/drei'
import { useEffect, useState, useRef } from "react"
import * as THREE from "three"
import { Box } from "@mui/system"

export const Home = () => {
    const ballsRef = useRef();

    const changeEyeDirection = (e) => {
        var x = e.pageX * 100 / window.innerWidth + "%"
        var y = e.pageY * 100 / window.innerHeight + "%"
        if(ballsRef.current){
            ballsRef.current.style.left = x;
            ballsRef.current.style.top = y;
        }
    }

    return(
        <div onMouseMove={changeEyeDirection}>
            <Grid container sx={{height: "100vh"}}>
                <Grid item xs={12} sm={6}>
                <Canvas 
                    className='canvas' 
                    shadows
                    camera={{position: [0,30,60], fov:15}}
                >
                    <Scene1/>
                </Canvas>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ height: "40%" }}>
                    </Box>
                    <Box sx={{ height: "60%", display:"flex", justifyContent:"flex-end", alignItems:"center", flexDirection: "column" }}>
                        <div style={{height:"25rem", width:"20rem", borderRadius:"50px 50px 0px 0px"}}>
                            <div className="eyes">
                                <div className="eye">
                                    <div className="ball" ref={ballsRef}></div>
                                </div>
                                <div className="eye">
                                    <div className="ball"></div>
                                </div>
                            </div>
                        </div>
                        <div style={{height:"5rem"}}></div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export const Scene1 = () => {
    const myMesh = useRef();
    const refImage = useRef();
    const refRing1 = useRef();
    const refRing2 = useRef();
    const refRing3 = useRef();
    const refRing4 = useRef();
    const [goingUp, setGoingUp] = useState(true)

    const [radius4, setRadius4] = useState(0)
    const [opacityRing4, setOpacityRing4] = useState(1)
    const [posRing4, setPosRing4] = useState(0)

    const [radius1, setRadius1] = useState(0)
    const [opacityRing1, setOpacityRing1] = useState(0)
    const [posRing1, setPosRing1] = useState(1.25)

    const [radius2, setRadius2] = useState(0)
    const [opacityRing2, setOpacityRing2] = useState(0)
    const [posRing2, setPosRing2] = useState(2.5)

    const [radius3, setRadius3] = useState(0)
    const [opacityRing3, setOpacityRing3] = useState(0)
    const [posRing3, setPosRing3] = useState(3.75)

    useFrame(() => {
        //console.log(myMesh.current.position.y)
        if(goingUp){
            if(myMesh.current.position.y <= 7){
                myMesh.current.position.y += 0.015;
                refImage.current.position.y += 0.015;
            }
            if(myMesh.current.position.y >= 8.5){
                setGoingUp(false)
            }
            if(myMesh.current.position.y >= 8){
                myMesh.current.position.y += 0.005;
                refImage.current.position.y += 0.005;
            }
            else{
                myMesh.current.position.y += 0.01;
                refImage.current.position.y += 0.01;
            }
        }
        if(!goingUp){
            if(myMesh.current.position.y <= 7.5){
                setGoingUp(true)
            }
            if(myMesh.current.position.y >= 8){
                myMesh.current.position.y -= 0.005;
                refImage.current.position.y -= 0.005;
            }
            else{
                myMesh.current.position.y -= 0.01;
                refImage.current.position.y -= 0.01;
            }
        }
      });

    useFrame(() => {
        if(refRing4.current.position.y >= 5){
            setPosRing4(0)
            setRadius4(0)
            setOpacityRing4(1)
        } else {
            setPosRing4(posRing4 + 0.01)
            setRadius4(radius4 + 0.008)
            setOpacityRing4(opacityRing4 - 0.002)
        }
    })

    useFrame(() => {
        if(refRing1.current.position.y >= 5){
            setPosRing1(0)
            setRadius1(0)
            setOpacityRing1(1)
        } else {
            setPosRing1(posRing1 + 0.01)
            setRadius1(radius1 + 0.008)
            setOpacityRing1(opacityRing1 - 0.002)
        }
    })

    useFrame(() => {
        if(refRing2.current.position.y >= 5){
            setPosRing2(0)
            setRadius2(0)
            setOpacityRing2(1)
        } else {
            setPosRing2(posRing2 + 0.01)
            setRadius2(radius2 + 0.008)
            setOpacityRing2(opacityRing2 - 0.002)
        }
    })

    useFrame(() => {
        if(refRing3.current.position.y >= 5){
            setPosRing3(0)
            setRadius3(0)
            setOpacityRing3(1)
        } else {
            setPosRing3(posRing3 + 0.01)
            setRadius3(radius3 + 0.008)
            setOpacityRing3(opacityRing3 - 0.002)
        }
    })

    const [video] = useState(
        () => Object.assign(document.createElement('video'), { src: "/guayna.mp4", crossOrigin: 'Anonymous', loop: true, muted: true})
    )

    useEffect(() => {
        video.play()
    }, [video])

    return(
        <>
            <ambientLight intensity={0.5} />
            <OrbitControls maxPolarAngle={Math.PI / 2 - Math.PI / 12} enableZoom={false} minPolarAngle={Math.PI / 2 - Math.PI / 12}></OrbitControls>
            <Environment preset="forest" blur={0.5}/>
            <group  position={[0, -7, 0]}>
                <RoundedBox receiveShadow castShadow smoothness={10} rotation-z={0.1 * Math.PI} radius={0.015} position={[0, 4, 0]} scale={[5,7,0.5]} ref={myMesh}>
                    <meshStandardMaterial color="#4c00a3" envMapIntensity={0.5} roughness={0} metalness={0}/>
                </RoundedBox>
                <mesh castShadow receiveShadow rotation-z={0.1 * Math.PI} position={[0, 4, 0.26]} scale={[4.75,6.75,0.5]} ref={refImage}>
                    <planeGeometry />
                    <meshBasicMaterial>
                        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding}/> 
                    </meshBasicMaterial>
                </mesh>
                <mesh receiveShadow castShadow position={[0,0,0]}>
                    <coneGeometry/>
                    <meshStandardMaterial color="#4c00a3" envMapIntensify={0.5} opacity={0.1}/>
                </mesh>
                <mesh receiveShadow castShadow rotation-x={0.5 * Math.PI} ref={refRing1} position={[0, posRing1, 0]}>
                    <torusGeometry args={[radius1, 0.15, 20, 110, Math.PI * 2]}/>
                    <meshPhongMaterial color="yellow" opacity={opacityRing1} transparent />
                </mesh>
                <mesh receiveShadow castShadow rotation-x={0.5 * Math.PI} ref={refRing2} position={[0, posRing2, 0]}>
                    <torusGeometry args={[radius2, 0.15, 20, 110, Math.PI * 2]}/>
                    <meshPhongMaterial color="yellow" opacity={opacityRing2} transparent />
                </mesh>
                <mesh receiveShadow castShadow rotation-x={0.5 * Math.PI} ref={refRing3} position={[0, posRing3, 0]}>
                    <torusGeometry args={[radius3, 0.15, 20, 110, Math.PI * 2]}/>
                    <meshPhongMaterial color="yellow" opacity={opacityRing3} transparent />
                </mesh>
                <mesh receiveShadow castShadow rotation-x={0.5 * Math.PI} ref={refRing4} position={[0, posRing4, 0]}>
                    <torusGeometry args={[radius4, 0.15, 20, 110, Math.PI * 2]}/>
                    <meshPhongMaterial color="yellow" opacity={opacityRing4} transparent />
                </mesh>
            </group>
        </>
    )
}