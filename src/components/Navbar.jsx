import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`;

const Links = styled.div`
    display:flex;
    align-items: center;
    gap: 50px;
`;


const Logo = styled.img`
    height: 50px;
    border-radius: 5px;
    background-color: white;
    `;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;
    font-weight: bold;
    &:hover{
        color: #da4ea2;
    }
`;

const Icons = styled.div`
    display:flex;
    align-items: center;
    gap: 50px;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;




export const Navbar = () => {
  return(
    <Section>
        <Container>
            <Links>
            <Logo src="./img/3.png"/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>About Me</ListItem>
                <ListItem>Works</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar