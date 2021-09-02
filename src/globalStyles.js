import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,600;0,700;1,300&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  :root{
    --blue_first:#21277B;
    --blue_second:#0064D7;
    --blue_third:#5F83B1;
    --blue_green:#9AD9EA;
    --white:#FFFFFF;
    --green:rgba(35, 203, 167, 1);
    --blue2per100:#d9f1ff;
  }
`
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;

  @media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px
  }
`

export default GlobalStyle