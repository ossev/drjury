import React from 'react'
import { Link } from 'gatsby'
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
          <a href="https://wa.me/13005410616" target="_blank"><WpIcon/></a>
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
  font-size:4rem;
	position: fixed;
  padding:0.2rem;
  height:50px;
	bottom: 40px;
  right:0;
  z-index:2;
`