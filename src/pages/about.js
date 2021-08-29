import React from 'react'
import styled from 'styled-components'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import profileImage from '../images/profile.jpeg'

const About = () => {
  return (
    <Layout>
    <Seo
      title="Sobre mi"
      description="Una descripción sobre mi perfil profesional"
    />
      <Card>
        <Title>
          <h2>Jury Ocampo</h2>
          <h4>Sicóloga</h4>
        </Title>
        <Resume>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci recusandae, expedita ad voluptatem saepe libero quam corrupti a voluptatibus, dignissimos unde porro laboriosam, sed earum soluta molestias tempora ut. Aut!</p>
        </Resume>
        <PictureContainer>
          <FotoPerfil src={profileImage}/>
        </PictureContainer>
      </Card>
    </Layout>
  )
}

export default About

const Card = styled.div`
  display:grid;
  grid-template-areas:
  "title profilePicture"
  "resume profilePicture";
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px){
    grid-template-areas:
    "title"
    "profilePicture"
    "resume";
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
  }
`
const Resume = styled.div`
  padding:0.8rem;
`

const Title = styled.div`
  display:flex;
  grid-area: title;
  justify-content:center;
  flex-direction:column;
  align-items:center;
`
const PictureContainer = styled.div`
  display:flex;
  grid-area: title;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  grid-area: profilePicture;
`

const FotoPerfil = styled.img`
  border-radius:20px;
  height:100%;


  @media (max-width: 768px){
    width:250px;
  }
`