import Hero from "./components/Hero.jsx";
import WhoIam from "./components/WhoIam.jsx";
import Works from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/mac.jpg") center;
  background-size: 100%;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Hero/>
      <WhoIam/>
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App