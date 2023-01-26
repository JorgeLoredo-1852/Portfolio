/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useGLTF, useAspect, useVideoTexture, useTexture } from '@react-three/drei'

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

export const Model = (props) => {
  const themeM = useTheme();
  const downLg = useMediaQuery(themeM.breakpoints.down('lg'));
const downXl = useMediaQuery(themeM.breakpoints.down('xl'));
const downSm = useMediaQuery(themeM.breakpoints.down('sm'));


  const { nodes, materials } = useGLTF("/home/control2.glb"); 
  

/*  const [video1, setVideo1] = useState(() => Object.assign(document.createElement('video'), { src: "/screens/Neon3.mp4", width:"100%", autoplay:true,  loop: true,  crossOrigin: 'Anonymous', muted: true, playsInLine: true}))
  const [video2] = useState(
    () => Object.assign(document.createElement('video'), { src: "/screens/Sonic2.mp4", width:"100%", autoplay:true, crossOrigin: 'Anonymous', loop: true, playsInLine:true, muted: true})
)
const [video3] = useState(
  () => Object.assign(document.createElement('video'), { src: "/screens/Dinosaur2.mp4", width:"100%", autoplay:true, crossOrigin: 'Anonymous', loop: true, playsInLine:true, muted: true})
)

useEffect(()=>{
  video2.play()
  },[video2])
  useEffect(()=>{
    video3.play()
    },[video3])


const [video4] = useState(
  () => Object.assign(document.createElement('video'), { src: "/screens/Samus2.mp4", width:"100%", autoplay:true, crossOrigin: 'Anonymous', loop: true,playsInLine:true, muted: true})
) 
const [video5] = useState(
  () => Object.assign(document.createElement('video'), { src: "/screens/Dragonite4.mp4", width:"100%", autoplay:true, crossOrigin: 'Anonymous', loop: true,playsInLine:true, muted: true})
)

useEffect(()=>{
  if(downSm){
    setVideo1(() => Object.assign(document.createElement('video'), { src: "/screens/TronDown3.mp4", width:"100%", autoplay:true,  loop: true,  crossOrigin: 'Anonymous', muted: true, playsInLine: true}))
  } else {
    setVideo1(() => Object.assign(document.createElement('video'), { src: "/screens/Neon3.mp4", width:"100%", autoplay:true,  loop: true,  crossOrigin: 'Anonymous', muted: true, playsInLine: true}))
  }
}, [downSm])*/

    /*
useEffect(()=>{
video1.play()
},[video1])

    useEffect(()=>{
      video4.play()
      },[video4])
      useEffect(()=>{
        video5.play()
        },[video5])*/

  return (
    <group {...props} dispose={null}>
<group scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body13001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body17001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body18001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body22001.geometry}
          material={materials["Material.008"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body23001.geometry}
          material={materials["Material.004"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body24001.geometry}
          material={materials["Material.004"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body25001.geometry}
          material={materials["Material.008"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body26001.geometry}
          material={materials["Material.008"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body27001.geometry}
          material={materials["Material.008"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body28001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body29001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body3001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body40.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body41.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body46.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body47.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body50.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body51001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body52001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body53001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body54001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body55001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body56001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body57001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body58001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body59001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body6001.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body63001.geometry}
          material={materials["Steel - Satin.003"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body67001.geometry}
          material={materials["Material.004"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body68001.geometry}
          material={materials["Material.004"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body69001.geometry}
          material={materials["Material.004"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body70001.geometry}
          material={materials["Material.004"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body71001.geometry}
          material={materials["Material.004"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body72001.geometry}
          material={materials["Material.004"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body721.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body7211.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body72111.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body721111.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body7212.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body7213.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body73.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body74.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body75.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body76.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body78.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body79.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body80.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body82.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body83.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body85.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body86.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body87.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body88.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body89.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body91.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body92.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body93.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body94.geometry}
          material={materials["Material.005"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body96.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body97.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Cheap Toy Plastic.005"]}
        position={[0.03, -0.02, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />




      <group
        position={[0, 17.5, -43]}
        rotation={[Math.PI / 6, 0, 0]}
        scale={28}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Steel - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.009"]}
        />
      </group>

      <group
        position={[-30.5, 17.5, -36.5]}
        rotation={[0.57, 0.37, -0.23]}
        scale={30}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Steel - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <group
        position={[32, 17.5, -36]}
        rotation={[0.58, -0.44, 0.27]}
        scale={30}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Steel - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.009"]}
        />
      </group>








      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        position={[0,42,-46.7]}
        scale={[32.5, 11, 19]}>      
        
        
        <Suspense fallback={<FallbackMaterial url="/Profile.png" />}>
        <VideoMaterial url="/screens/Neon3.mp4" />
      </Suspense>
                         {/*   <meshBasicMaterial  metalness={0.1}>
                        <videoTexture attach="map" args={[video1]} encoding={THREE.sRGBEncoding}/>
                        <VideoMaterial url="/screens/Neon3.mp4" />
                        </meshBasicMaterial>*/}
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        rotation={[-Math.PI / 2, 0, Math.PI-Math.PI/5 + Math.PI/90]}
        position={[42.3,31,-33.5]}
        scale={[8.3, 1, 8]}>

<Suspense fallback={<FallbackMaterial url="/Profile.png" />}>
        <VideoMaterial url="/screens/Sonic2.mp4" />
      </Suspense>
                           {/* <meshBasicMaterial metalness={0.1}>
                        <videoTexture attach="map" args={[video2]} encoding={THREE.sRGBEncoding}/>
                      </meshBasicMaterial>*/}
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        rotation={[-Math.PI / 2, 0, Math.PI-Math.PI/5 + Math.PI/90]}
        position={[42.3,48,-33.5]}
        scale={[8.3, 1, 5.5]}>

<Suspense fallback={<FallbackMaterial url="/Profile.png" />}>
        <VideoMaterial url="/screens/Dinosaur2.mp4" />
      </Suspense>

                            {/*<meshBasicMaterial metalness={0.1}>
                        <videoTexture attach="map" args={[video3]} encoding={THREE.sRGBEncoding}/>
                    </meshBasicMaterial>*/}
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        rotation={[-Math.PI / 2, 0, Math.PI + Math.PI/5 - Math.PI/90]}
        position={[-42.3,31,-33.5]}
        scale={[8.3, 1, 8]}>

<Suspense fallback={<FallbackMaterial url="/Profile.png" />}>
        <VideoMaterial url="/screens/Samus2.mp4" />
      </Suspense>
                         {/*   <meshBasicMaterial metalness={0.1}>
                        <videoTexture attach="map" args={[video4]} encoding={THREE.sRGBEncoding}/>
                        </meshBasicMaterial>*/}
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        rotation={[-Math.PI / 2, 0, Math.PI + Math.PI/5 - Math.PI/90]}
        position={[-42.3,48,-33.5]}
        scale={[8.3, 1, 5.5]}>

<Suspense fallback={<FallbackMaterial url="/Profile.png" />}>
        <VideoMaterial url="/screens/Dragonite4.mp4" />
      </Suspense>
                         {/*   <meshBasicMaterial  metalness={0.1}>
                        <videoTexture attach="map" args={[video5]} encoding={THREE.sRGBEncoding}/>
                        </meshBasicMaterial>*/}
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer_Chair.geometry}
        material={materials["Material.001"]}
        position={[0, 0, -18]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer_Chair001.geometry}
        material={materials["Material.001"]}
        position={[-20, 0, -15]}
        rotation={[Math.PI / 2, 0, 2.71]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer_Chair002.geometry}
        material={materials["Material.001"]}
        position={[20, 0, -15]}
        rotation={[Math.PI / 2, 0, -2.68]}
        scale={0.05}
      />
      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Electronics1.geometry}
        material={materials["Electronics"]}
        position={[-42.5, 7, -9.5]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Electronics1001.geometry}
        material={materials["Electronics"]}
        position={[42.5, 7, -9.45]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={7}
      />

    </group>
  );
}

useGLTF.preload("/home/control2.glb");