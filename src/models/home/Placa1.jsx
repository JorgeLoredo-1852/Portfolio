/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/home/placa.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.1,7.25,-0.4]} scale={0.1}>
        <mesh 
          castShadow
          receiveShadow
          geometry={nodes.Body11.geometry}
          material={materials["Material.001"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body12.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/home/placa.glb");
