import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,800;1,100;1,200;1,300;1,400;1,600;1,800&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  :root{
    --blue_first:#21277B;
    --blue_second:#0064D7;
    --blue_third:#5F83B1;
    --blue_green:#9AD9EA;
    --white:#FFFFFF;
    --green:rgba(35, 203, 167, 1);
    --blue2per100:#d9f1ff;
    --blue_contact:rgba(19,141,242,255);
    --white_transparent_1:rgba(255, 255, 255, 0.4);
  }
`
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  /* max-width: 1300px; */
  margin-right: auto;
  margin-left: auto;
  padding: 10px;

  @media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px
  }
`

export default GlobalStyle