/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/3DTech/c.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.02, 0]} scale={[1, 0.5, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={materials["Main.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_1.geometry}
          material={materials["Edges.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3DTech/c.glb");