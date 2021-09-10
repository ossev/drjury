import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { GrInstagram } from 'react-icons/gr'
import contactbg from '../images/contactbg.jpg'
import CallingImage from '../images/calling_people.jpg'

const Contact = () => {
  return (

    <Layout>
    <Seo
      title="Contacto"
      description="Información de contacto Dra Jury Ocampo"
    />
      <Title>Contáctame</Title>
      <CallinPeopleImg src={CallingImage}/>
      <DivBg>
        <ContactItem>
          <PhoneImage/>
          <span>312 510 83 89</span>
        </ContactItem>
        <ContactItem>
          <EmailImage/>
          <span>psic.juryocampo@gmail.com</span>
        </ContactItem>
        <ContactItem>
          <InstaImage/>
          <span>psic.juryocampo</span>
        </ContactItem>
        <Nota>
        La esperanza es la virtud más indispensable inherente a la condición de estar vivo (Erik Erikson)
        </Nota>
      </DivBg>

    </Layout>


  )
}

export default Contact

const ContactItem = styled.div`
  display:flex;
  align-items:center;
  /* color:var(--blue_contact); */
  font-weight:bold;
  font-size:1.5rem;
  background-color:var(--blue2per100);
  margin:auto;
  border-radius: 1rem;
  padding:1rem;
  justify-content:space-between;
  max-width:420px;
  margin-top:0.7rem;

  @media (max-width: 768px){
    font-size: 1rem;
  }
`

const PhoneImage = styled(AiFillPhone)`
  font-size: 2rem;
  color:var(--blue_contact);

  @media (max-width: 768px){
    font-size: 2rem;
  }
`

const InstaImage = styled(GrInstagram)`
  font-size: 2rem;
  color:var(--blue_contact);

  @media (max-width: 768px){
    font-size: 2rem;
  }
`


const EmailImage = styled(MdEmail)`
  font-size: 2rem;
  color:var(--blue_contact);

  @media (max-width: 768px){
    font-size: 2rem;
  }
`
const DivBg = styled.div`
  /* background-image:url(${contactbg}); */
  /* background-color:#d1edff; */
  /* background-repeat: no-repeat;
  background-size:cover; */
  border-radius: 10px;
  padding:0.5rem;
`
const Nota = styled.div`
  padding:1rem;
  /* color:var(--blue_contact); */
  font-size:1.5rem;
  font-style:italic;

  @media (max-width: 768px){
    font-size: 1rem;
  }
`
// const Hero = styled.img`
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   width:100%;
//   max-width:700px;
// `
const Title = styled.div`
  color:var(--blue_first);
  font-size:2rem;
  font-weight:600;
  font-size:3rem;
  margin-bottom:1rem;
  display:flex;
  justify-content:center;

  @media (max-width: 768px){
    font-size: 1.8rem;
  }
`

const CallinPeopleImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:100%;
  max-width:500px;
  padding:2rem 1rem;
`