/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/3DTech/db.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.032"]}
        position={[-0.41, 0.53, 0.51]}
        scale={[35, 1, 35]}
      />
      <group position={[0, 1.02, 0]} scale={[1, 0.5, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["Main.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_1.geometry}
          material={materials["Edges.013"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3DTech/db.glb");
