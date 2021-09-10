import * as React from "react"
import styled from 'styled-components'

import Layout from "../components/Layout"
import FelicidadImg from "../images/felicidad.jpg"
import KnowUSelfImg from "../images/conocete.jpg"
import CalmaImg from "../images/mantener_calma.jpeg"
import HeroImg from "../images/heroimga.jpg"




const IndexPage = () => {
  return (
    <>
      <Layout>
        <HeroImage src={HeroImg}/>
        <CardPost>
          <PostImg src={FelicidadImg}/>
          <CardDescription>
          <h3>La felicidad es cuestion de vivir</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fuga recusandae dolore, suscipit iusto et quidem omnis quasi magnam, quas nisi ducimus! Qui, beatae quae. Saepe, hic at. Sed, tempore?</CardDescription>
        </CardPost>
        <CardPost>
          <PostImg src={KnowUSelfImg}/>
          <CardDescription>
            <h3>Conócete a ti mismo</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem exercitationem nemo possimus, quo dolorem tenetur repellendus ullam veritatis sequi, autem delectus porro quibusdam consequuntur asperiores ducimus amet. Mollitia, sed quo.
          </CardDescription>
        </CardPost>
        <CardPost>
          <PostImg src={CalmaImg}/>
          <CardDescription>
            <h3>Mantener la calma</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eligendi? Voluptate possimus iure excepturi consectetur ab doloremque culpa, debitis blanditiis porro at ea hic cumque eaque omnis harum, quidem nemo!
          </CardDescription>
        </CardPost>
      </Layout>
    </>
  )
}

export default IndexPage

const CardPost = styled.div`
  display:flex;
  background-color:var(--blue2per100);
  padding:1rem;
  border-radius:1rem;
  margin-bottom:1rem;

  @media (max-width: 940px){
    flex-wrap:wrap;
  }
`

const PostImg = styled.img`
  display:block;
  object-fit:contain;
  border-radius:1rem;
  max-width:500px;

  @media (max-width: 940px){
    max-width:100%
  }
`
const CardDescription = styled.div`
  padding:0.5rem;
  font-size:1.5rem;

  @media (max-width: 768px){
    font-size:1rem;
  }
`
const HeroImage = styled.img`
  width:100%
`