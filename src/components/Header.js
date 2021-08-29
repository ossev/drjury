import React, {useState} from 'react';
import { FaBars,FaHistory } from 'react-icons/fa'
import styled from 'styled-components';
import { Link } from 'gatsby';
import { menuData } from './data/MenuData';
import { Button } from './Button';


const Header = () => {

const [open, setopen] = useState(false)

return (
    <Nav open={open}>
      <NavLink to="/">{open ? 'Abierto': 'Cerrado'}</NavLink>
      {
        open?
        <BarsBack onClick={() => setopen(!open)}/>
        :
        <Bars onClick={() => setopen(!open)}/>
      }
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/services">
          Pide una cita
        </Button>
      </NavBtn>
    </Nav>
    );
};
export default Header;

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px)/2);
  position: relative;

  @media screen and (max-width: 768px){
    height:${({open}) => (open ? '100vh' : '80px')};
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #FFF;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const BarsBack = styled(FaHistory)`
  display: none;
  color: #FFF;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -48px; */

  @media screen and (max-width: 768px){
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none
  }
`