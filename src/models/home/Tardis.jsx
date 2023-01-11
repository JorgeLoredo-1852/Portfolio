/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/home/tardis.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.65}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1.geometry}
          material={materials["Material.006"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2.geometry}
          material={materials["Material.007"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4.geometry}
          material={materials["Material.008"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/home/tardis.glb");