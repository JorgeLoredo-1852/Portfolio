/*
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/game.glb");
  return ( 
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021.geometry}
        material={materials["Cheap Toy Plastic.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_1.geometry}
        material={materials["default.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_2.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_3.geometry}
        material={materials["Cheap Toy Plastic"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_4.geometry}
        material={materials["Cheap Toy Plastic.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_5.geometry}
        material={materials["Material.005"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_6.geometry}
        material={materials["Material.006"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_7.geometry}
        material={materials["Material.014"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_8.geometry}
        material={materials["Material.012"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_9.geometry}
        material={materials["Cheap Toy Plastic.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_10.geometry}
        material={materials["Material.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_11.geometry}
        material={materials["Cheap Toy Plastic.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_12.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_13.geometry}
        material={materials["Material.010"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_14.geometry}
        material={materials.Black_plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_15.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh021_16.geometry}
        material={materials["Material.009"]}
      />
    </group>
  );
}

useGLTF.preload("/game.glb");