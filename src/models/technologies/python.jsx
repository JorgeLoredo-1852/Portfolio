/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export function Model(props) {
  const { nodes, materials } = useGLTF("/3DTech/python.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.02, 0]} scale={[1, 0.5, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Main.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials["Edges.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_2.geometry}
          material={materials["Material.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_3.geometry}
          material={materials["Material.038"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3DTech/python.glb");
