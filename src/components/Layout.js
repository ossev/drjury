import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
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
      </LayoutContainer>
    </>
  )
}

export default Layout

const LayoutContainer = styled.div`
  height:100vh;
  background: #caf0f8;
`
