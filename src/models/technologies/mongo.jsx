/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/3DTech/mongo.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.02, 0]} scale={[1, 0.5, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.Main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials.Edges}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["Material.003"]}
        position={[-0.66, 0.56, 0.7]}
        scale={[32, 1, 32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["Material.002"]}
        position={[-0.66, 0.55, 0.7]}
        scale={[32, 1, 32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["Material.001"]}
        position={[-0.66, 0.56, 0.7]}
        scale={[32, 1, 32]}
      />
    </group>
  );
}

useGLTF.preload("/3DTech/mongo.glb");