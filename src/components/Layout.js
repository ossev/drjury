import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Footer from './Footer'
import {RiWhatsappFill} from 'react-icons/ri'
import GlobalStyle, {Container} from '../globalStyles'

const Layout = ({children}) => {

  return (
    <>
    <GlobalStyle/>
      <LayoutContainer>
          <Navbar></Navbar>
          <Container>
          {children}
          </Container>
          <a href="https://wa.me/573125108389" target="_blank"><WpIcon/></a>
          <Footer>
          </Footer>
      </LayoutContainer>
    </>
  )
}

export default Layout

const LayoutContainer = styled.div`
  position:relative;
  min-height:100vh;
  background: var(--white);
  max-width:960px;
  margin:auto;
`

const WpIcon = styled(RiWhatsappFill)`
  cursor: pointer;
  color:green;
  font-size:100px;
	position: fixed;
  padding:0.2rem;
  height:100px;
	bottom: 40px;
  right:0;
  margin-right:10px;
  z-index:2;
  &:hover {
    color:var(--blue_first);
  }

  @media (max-width: 768px){
    font-size:70px;
    height:70px;
  };


`