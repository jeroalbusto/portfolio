import React, { useState } from 'react'
import styled from 'styled-components'
import Development from "./Development.jsx";
import ProductDesign from "./ProductDesign.jsx";
import WebDesign from "./WebDesign.jsx";


const data = [
  "Web Design",
  "Development",
  "Ilustration",
  "Product Design",
  "Social Media",
]


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ListItem = styled.li`
  font-size: 58px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px white;
  &:hover{
    color: blueviolet;
  }

`

const Right = styled.div`
  flex: 1;
`



export const Works = () => {
  const [work,setWork] = useState("Web Design")

  return (
    <Section>
      <Container>

        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} onClick={()=>setWork(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        
        <Right>
          {work === "Web Design" ? (<WebDesign/>) : work === "Development" ? (<Development/>) : <ProductDesign/>}
        </Right>

      </Container>
    </Section>
  )
}

export default Works