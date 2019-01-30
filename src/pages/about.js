import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Anima from '../components/anima'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 12rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
` 

const StyledImg = styled(Img)`
  flex: 1;
  border-radius: 7px;
  margin-bottom: 1rem;
  order: -1;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const Content = styled.div`
  flex: 1;
  margin: 0 0 0 6rem;
` 

export default ({ data }) => (
  <Layout>
    <Wrapper>
      <Content>
        <h2>About me</h2>
        <p>
        Chocolate gummies cake. Cookie oat cake jujubes cupcake tart tart chocolate bar gingerbread jelly-o. Gummies chocolate cake macaroon sesame snaps cookie. Dragée wafer danish dragée muffin muffin. Marzipan gummies cookie cupcake pudding pie. 
        Caramels chocolate bar sugar plum. Halvah muffin pie gummi bears. Fruitcake chocolate gingerbread. 
        </p>
      </Content>
      <StyledImg fluid={data.aboutImage.childImageSharp.fluid} />
      <Anima />
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    aboutImage: file(relativePath: { eq: "assets/images/one.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`