/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/home/tetris6.glb");
  return (
    <group {...props} dispose={null}>
      <mesh

        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[0, 0, 0]}
        scale={[1, 1, 2]}
      />
    </group>
  );
}

useGLTF.preload("/home/tetris6.glb");
