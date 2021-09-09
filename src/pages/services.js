import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import styled from 'styled-components'
import ImgTeraphy from '../images/sicoterapia.jpg'
import ImgTeraphyMate from '../images/terapia_pareja.jpg'
import ImgTeraphyFamily from '../images/terapia_familiar.jpg'
import ImgTeraphyKids from '../images/terapia_niños.jpg'

const Services = () => {
  return (
    <Layout>
    <Seo
      title="Servicios"
      description="Una descripción sobre mi perfil profesional"
    />

    <ContainerService>
      <Card>
        <CardTitle>
            Terapia individual
        </CardTitle>
          <CardImg src={ImgTeraphy}/>
        <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque ut vitae, voluptas, laboriosam ipsam officia corporis similique perferendis explicabo ea molestiae, architecto velit modi pariatur quo aut voluptate. Voluptates.
        </CardDescription>
      </Card>

      <Card>
        <CardTitle>
            Terapia de pareja
        </CardTitle>
          <CardImg src={ImgTeraphyMate}/>
        <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque ut vitae, voluptas, laboriosam ipsam officia corporis similique perferendis explicabo ea molestiae, architecto velit modi pariatur quo aut voluptate. Voluptates.
        </CardDescription>
      </Card>

      <Card>
        <CardTitle>
            Terapia familiar
        </CardTitle>
          <CardImg src={ImgTeraphyFamily}/>
        <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque ut vitae, voluptas, laboriosam ipsam officia corporis similique perferendis explicabo ea molestiae, architecto velit modi pariatur quo aut voluptate. Voluptates.
        </CardDescription>
      </Card>

      <Card>
        <CardTitle>
            Terapia para niños
        </CardTitle>
          <CardImg src={ImgTeraphyKids}/>
        <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque ut vitae, voluptas, laboriosam ipsam officia corporis similique perferendis explicabo ea molestiae, architecto velit modi pariatur quo aut voluptate. Voluptates.
        </CardDescription>
      </Card>

    </ContainerService>


    </Layout>
  )
}

export default Services

const Card = styled.div`
  /* width:600px; */
  max-width:600px;
  min-width:300px;
  background-color:var(--blue2per100);
  margin:0.5rem auto;
  border-radius:7px;
  padding:10px;
  /* display:flex; */
`
const CardTitle = styled.h2`
  display:flex;
  justify-content:center;
  margin-bottom:0.5rem;
`

const CardImg = styled.img`
  display:block;
  object-fit:contain;
  max-width:100%;
  border-radius:1rem;
`

const CardDescription = styled.div`
  padding:0.5rem;
`

const ContainerService = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
`