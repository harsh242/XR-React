import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/flair.glb");
  const { actions } = useAnimations(animations, group);
  const { ref, mixer, names, clips } = useAnimations(animations);

  console.log(actions);

  useEffect(() => {
    actions.Flair.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="Armature"
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
      >
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.Mesh003.geometry}
          material={materials["basemetal.3"]}
          skeleton={nodes.Mesh003.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh003_1.geometry}
          material={materials["metal player.3"]}
          skeleton={nodes.Mesh003_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh003_2.geometry}
          material={materials["basemetalA.3"]}
          skeleton={nodes.Mesh003_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh003_3.geometry}
          material={materials["rubber.3"]}
          skeleton={nodes.Mesh003_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh001.geometry}
          material={materials["basemetalA.1"]}
          skeleton={nodes.Mesh001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh001_1.geometry}
          material={materials["rubber.1"]}
          skeleton={nodes.Mesh001_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh001_2.geometry}
          material={materials["metal player.1"]}
          skeleton={nodes.Mesh001_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh001_3.geometry}
          material={materials["basemetal.1"]}
          skeleton={nodes.Mesh001_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh004.geometry}
          material={materials["Material #3"]}
          skeleton={nodes.Mesh004.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh004_1.geometry}
          material={materials["basemetalA.4"]}
          skeleton={nodes.Mesh004_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh.geometry}
          material={materials["metal player"]}
          skeleton={nodes.Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_1.geometry}
          material={materials.basemetalA}
          skeleton={nodes.Mesh_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_2.geometry}
          material={materials.rubber}
          skeleton={nodes.Mesh_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh_3.geometry}
          material={materials.basemetal}
          skeleton={nodes.Mesh_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh002.geometry}
          material={materials["basemetalA.2"]}
          skeleton={nodes.Mesh002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh002_1.geometry}
          material={materials["metal player.2"]}
          skeleton={nodes.Mesh002_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh002_2.geometry}
          material={materials["rubber.2"]}
          skeleton={nodes.Mesh002_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh002_3.geometry}
          material={materials["basemetal.2"]}
          skeleton={nodes.Mesh002_3.skeleton}
        />
      </group>
    </group>
  );
}

export default Model;
