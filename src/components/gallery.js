import React, { Component } from "react";
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
    margin: 0 auto;
    margin-bottom: 6rem;
    overflow: visible;
` 

const Title = styled.h5`
    margin-bottom: 2rem;
    text-align: center;
`

const Inner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 6rem;
`

const Box = styled.div`
    text-decoration: none;
  
`

const StyledImg = styled(Img)`
    border-radius: 7px;
    margin-bottom: 1rem;
    opacity: 1;
	-webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    
        :hover {
            opacity: .7;
        }
 
`


export class Gallery extends Component {

      render(){
        return (
            <Wrapper>
            <Title>
                Portfolio
            </Title>
                <Inner>
                {this.props.data.AllPostImages.edges.map(({ node }) => (
                    <Box key={node.id} className='box' >
                        <StyledImg fluid={node.childImageSharp.fluid} />
                    </Box>
                ))}
                </Inner>
            </Wrapper>
        )
    }
}

export default props => (
      
    <StaticQuery
    query={graphql`
      query {
        AllPostImages: allFile(filter: { extension: { eq: "jpg" } }) {
            edges {
                node {
                    id
                    childImageSharp {
                        fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid_noBase64
                            aspectRatio
                        }
                     }
                }
            }
        }
    }
`}
    render={data => <Gallery data={data} {...props} />}
    />
)
