import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      Hola, yo soy el footer!!!
      <Author>
        Diseño y Desarrollo por OsSev!
      </Author>
      
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.2rem;
  text-align: center;
  color:var(--white);
  background:linear-gradient(var(--blue_second), var(--blue_first));
`

const Author = styled.div`
  font-size:0.7rem;
`
