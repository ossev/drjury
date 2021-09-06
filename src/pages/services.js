import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import styled from 'styled-components'
import ImgTeraphy from '../images/sicoterapia.jpg'

const Services = () => {
  return (
    <Layout>
    <Seo
      title="Servicios"
      description="Una descripción sobre mi perfil profesional"
    />
      <Card>
        <CardTitle>
            Psicoterapia
        </CardTitle>
          <CardImg sry={ImgTeraphy}/>
        <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque ut vitae, voluptas, laboriosam ipsam officia corporis similique perferendis explicabo ea molestiae, architecto velit modi pariatur quo aut voluptate. Voluptates.
        </CardDescription>
      </Card>

    </Layout>
  )
}

export default Services

const Card = styled.div`
  width:300px;
  height:300px;
  background-color:var(--blue_green);
  margin:5px;
  border-radius:7px;
  padding:10px;
`
const CardTitle = styled.h3``

const CardImg = styled.img`
  width:100%;
  height:100%;
`

const CardDescription = styled.div``