import React from 'react'
import styled from 'styled-components'
import {OrbitControls} from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import Cube from './Cube.jsx';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  scroll-snap-align: center;
  height: 100vh;
  width: 900px;
  display: flex;
  justify-content: space-between;
`



const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 74px;
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`


export const WhoIam = () => {
  return (
    <Section>
      <Container>

        <Left>
        <Canvas camera={{fov:25, position:[6,6,6]}}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 1, 2,]} />
        <Cube/>
      </Canvas>
        </Left>

        <Right>
          <Title>FULL STACK DEVELOPER </Title>
          <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, aperiam.</Desc>
          <Button>Learn More</Button>
        </Right>

      </Container>
    </Section>
  )
}

export default WhoIam