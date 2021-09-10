import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <CardFooter>Cel: 312 510 83 89</CardFooter>
      <CardFooter>Email: psic.juryocampo@gmail.com</CardFooter>
      <CardFooter>Diseño y Desarrollo por OsSev</CardFooter>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
  color:var(--blue_second);
  background:linear-gradient(var(--white), var(--blue2per100));
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
`
const CardFooter = styled.div`
  padding:0.5rem;
  width:400px;
`
