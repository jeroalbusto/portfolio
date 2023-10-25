import React from 'react'
import styled from 'styled-components'
import Navbar  from './Navbar.jsx'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei'


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 900px;
  display: flex;
  justify-content: space-between;
`



const Left = styled.div`
  flex: 2;
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
  width: 150px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`


const Right = styled.div`
  flex: 3;
  position: relative;
`
const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`



export const Hero = () => {
  return (
    <Section>
      <Navbar></Navbar>
      <Container>

        <Left>
          <Title>Jeronimo Albusto</Title>
          <Desc>I'am Full Satck Developer in Javascript, my stack of technologies that i work with are React.js, Node.js, MongoDB, y MySql</Desc>
          <Button>Download CV</Button>
        </Left>

        <Right>
        <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 1, 2,]} />
        <Sphere args={[1,100,200]} scale={2.2}>
        <MeshDistortMaterial color="#c94b96" attach="material" distort={0.5} speed={2}/>
        </Sphere>
      </Canvas>

          <Img src="./img/coding2.png"/>
        </Right>

      </Container>
    </Section>
  )
}

export default Hero