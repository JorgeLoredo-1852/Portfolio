/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/3DTech/mysql.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.023"]}
        position={[-0.63, 0.54, 0.36]}
        scale={[12, 1, 12]}
      />
      <group position={[0, 1.02, 0]} scale={[1, 0.5, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Main.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Edges.006"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.024"]}
        position={[-0.63, 0.54, 0.36]}
        scale={[12, 1, 12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["SVGMat.025"]}
        position={[-0.63, 0.54, 0.36]}
        scale={[12, 1, 12]}
      />
    </group>
  );
}

useGLTF.preload("/3DTech/mysql.glb");