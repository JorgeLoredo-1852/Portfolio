/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";


export function Model(props) {
  const { nodes, materials } = useGLTF("/3DTech/nodejs.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.02, 0]} scale={[1, 0.5, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Main.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials["Edges.005"]}
        />
      </group>
      <group position={[-0.7, 0.53, 0.42]} scale={[15, 1, 15]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve022.geometry}
          material={materials["SVGMat.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve022_1.geometry}
          material={materials["SVGMat.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve022_2.geometry}
          material={materials["SVGMat.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve022_3.geometry}
          material={nodes.Curve022_3.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3DTech/nodejs.glb");