/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/home/textAnimation.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.002"]}
        position={[-0.07, 0.99, 0.1]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.2, 1, 0.2]}
      />
    </group>
  );
}

useGLTF.preload("/home/textAnimation.glb");
