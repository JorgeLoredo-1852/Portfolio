/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/home/DiscoRole2.glb");
  return (
<group {...props} dispose={null} >
      <group rotation={[0,0,Math.PI/2]} position={[0,0,-0.3]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body5.geometry}
          material={materials["Paint - Enamel Glossy (Grey)"]}
          scale={10}
        />
      </group>
      <mesh
          castShadow
          receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.9}
        position={[0,0,0.002]}
      />
    </group>
  );
}

useGLTF.preload("/home/DiscoRole2.glb");

