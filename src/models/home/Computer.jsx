/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/home/cpu.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body40.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body41.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body49.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body50.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body51.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body52.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body53.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body54.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body55.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body56.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body57.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body60.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body61.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body62.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body63.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body64.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body65.geometry}
          material={materials["Steel - Satin"]}
          scale={10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body7.geometry}
          material={materials["Material.001"]}
          scale={10}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/home/cpu.glb");