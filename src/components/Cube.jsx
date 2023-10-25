import React, { useRef } from "react";
import { Text, RenderTexture,PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Cube = () => {
  const textRef = useRef()
  useFrame(state=>(textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#FFFF11"]} />
          <Text ref={textRef} fontSize={0.6} color="#000">
            Javascript i love
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube