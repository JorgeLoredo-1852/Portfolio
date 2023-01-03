

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = ({rotation, refa}) => {
  const { nodes, materials } = useGLTF("/rocket2.glb");
  return (
    <group rotation={rotation} dispose={null} ref={refa}>
      <group position={[0, 0.25, 0]} scale={0.12}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.red}
        position={[0, 0.62, 0]}
        scale={[0.04, 0.06, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.003"]}
        position={[0, 0.68, 0]}
        scale={[0.01, 0.05, 0.01]}
      />
      <group position={[0, 0.74, 0]} scale={0.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_2.geometry}
          material={materials.red}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.red}
        position={[0, 0.17, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.red}
        position={[0, 0.17, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.red}
        position={[0, 0.17, 0]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.red}
        position={[0, 0.17, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.04}
      />
      <group
        position={[0, 0.39, 0.11]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.06, 0.02, 0.06]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.red}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials.red}
        position={[0, 0.53, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={nodes.Sphere003.material}
        position={[0.02, 0.37, 0.1]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.005"]}
        position={[0, 0.25, 0]}
        scale={0.12}
      />
    </group>
  );
}

useGLTF.preload("/rocket2.glb");