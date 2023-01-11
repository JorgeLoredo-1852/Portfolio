/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/home/TetrisPlaneMissingOne.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.002"]}
        position={[1.26, 0, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[5, 1, 5]}
      />
    </group>
  );
}

useGLTF.preload("/home/TetrisPlaneMissingOne.glb");
