import React,{useState} from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Footer from './Footer'
import {FiSend} from 'react-icons/fi'
import {RiWhatsappFill} from 'react-icons/ri'
import GlobalStyle, {Container} from '../globalStyles'

const Layout = ({children}) => {

  const [typing, settyping] = useState(false)

  return (
    <>
    <GlobalStyle/>
      <LayoutContainer>
          <Navbar></Navbar>
          <Container>
          {children}
          </Container>
          <ContainerMsg>
            <input type="text" placeholder="Escríbeme..."/>
            {
              typing
              ?<WpIconSend/>
              :<WpIcon></WpIcon>
            }
          </ContainerMsg>
          <Footer>
          </Footer>
      </LayoutContainer>
    </>
  )
}

export default Layout

const LayoutContainer = styled.div`
  height:100vh;
  background: var(--white);
`

const ContainerMsg = styled.div`
  display:flex;
	position: fixed;
  padding:0.2rem;
  height:50px;
	bottom: 50px;
  right:0;
  background:var(--blue2per100);
	transition: all 300ms ease 0ms;
	/* z-index: 99; */
  border-radius:2rem;
  justify-content:space-between;
  align-items:center;
  margin:0 0.5rem;
  width:450px;

  input{
    padding:0.2rem;
    border:none;
    outline:none;
    background:transparent;
    width:100%
  }

  &:focus-within{
    border:1px solid var(--blue_first);
    box-shadow: 5px 5px 5px var(--blue_first);
  }

  @media screen and (max-width: 480px){
    padding:0.2rem;
    width:100%;
    margin:auto;
  }
`
const WpIcon = styled(RiWhatsappFill)`
  cursor: pointer;
  color:var(--blue_first);
  font-size:3rem;
`
const WpIconSend = styled(FiSend)`
  cursor: pointer;
  color:var(--blue_first);
  font-size:3rem;
`