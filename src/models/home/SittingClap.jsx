

import { useGLTF, useAnimations } from "@react-three/drei";
import React, { useRef, useEffect, useState } from "react"

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/home/sittingclap.glb");
  const { ref, actions, names } = useAnimations(animations)
  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[0]].reset().fadeIn(0.5).play()
    // In the clean-up phase, fade it out
    return () => actions[names[0]].fadeOut(0.5)
  }, [ actions, names])
  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="low_poly_base_mesh"
          position={[0.01, -0.33, 0.04]}
          rotation={[0, 0, 0.02]}
        >
          <primitive object={nodes.spine} />
          <skinnedMesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials["Material.001"]}
            skeleton={nodes.Cube001.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/home/sittingclap.glb");
