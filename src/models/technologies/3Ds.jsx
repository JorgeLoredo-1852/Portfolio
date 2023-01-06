/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/3DTech/3Ds.glb");
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
        material={materials["SVGMat.005"]}
        position={[-0.57, 0.53, 0.59]}
        scale={[30, 1, 30]}
      />
    </group>
  );
}

useGLTF.preload("/3DTech/3Ds.glb");