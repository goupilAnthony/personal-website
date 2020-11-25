import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Background404 = styled(Typography)`
    color: #d24747b3 !important;
    font-size: 6rem !important;
`
const IntroImg = styled(Img)`
    width: 50vw;
    min-width: 200px;
    max-width: 300px;
    margin: 0 auto 5vh auto;
    top: -5vh;
    @media screen and (max-width: 400px) {
        margin-bottom: 0px;
        top: -10vh;
    }
`

const Custom404 = () => {
    const logo = useStaticQuery(graphql`
        query logo {
            file(relativePath: {eq: "goupil_vertical_white_with_icon_logo.png"}) {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `)
    return (
        <>
            <IntroImg fluid={logo.file.childImageSharp.fluid} />
            <Background404 variant="body2" align="center" >404</Background404>
            <Typography variant="body2" align="center">Je n'ai pas trouvé la page que tu as demandé !</Typography>
        </>
    )
}

export default Custom404