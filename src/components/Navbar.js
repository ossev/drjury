import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {FaLayerGroup, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false)
  return (
    <Nav>
      <Logo to="/">
        <span>Dra Jury Ocampo</span>
      </Logo>
      <Hamburguer onClick={() => setisOpen(!isOpen)}>
        {
          isOpen
          ?<CloseBurguer></CloseBurguer>
          :<FaBurguer></FaBurguer>
        }
      </Hamburguer>
      <Menu isOpen={isOpen}>
        <MenuLink to="/services">Servicios</MenuLink>
        <MenuLink to="/about">Sobre mi</MenuLink>
        <MenuLink to="/contact">Contacto</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar

const FaBurguer = styled(FaLayerGroup)`
  font-size:2rem;
  color: var(--blue_first);
`
const CloseBurguer = styled(FaTimes)`
  font-size:2rem;
  color: var(--blue_first);
`

const Nav = styled.div`
  padding: 0.7rem 2rem;
  display: flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap: wrap;
  background:var(--white);
`

const Logo = styled(Link)`
  padding: 1rem, 0;
  color: var(--blue_first);
  text-decoration: none;
  font-size: 1.7rem;
  font-weight:bold;

  span{
    font-size: 1.3rem;
  }
`

const Hamburguer = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span{
    height: 2px;
    width: 25px;
    background: var(--blue_first);
    margin-bottom: 4px;
    border-radius: 5px
  }

  @media (max-width: 768px){
    display:flex;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position:relative;

  @media (max-width: 768px){
    overflow: hidden;
    flex-direction: column;
    width:100%;
    max-height:${({isOpen}) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align:center;
  text-decoration:none;
  color: var(--blue_first);
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover{
    color: var(--blue_first)
  }
`