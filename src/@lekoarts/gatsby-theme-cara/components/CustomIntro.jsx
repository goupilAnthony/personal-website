import React from 'react'
import TextLoop from "react-text-loop"
import styled from "styled-components"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Bounce, Slide } from 'react-reveal'
import { Typography } from '@material-ui/core'

const IntroContainer = styled.div`
    height: 70vh;
`

const IntroLoopedText = styled.span`
    color: orange;
`

const IntroImg = styled(Img)`
    width: 50vw;
    min-width: 200px;
    max-width: 300px;
    margin: 0 auto 15vh auto;
    top: -5vh;
    @media screen and (max-width: 400px) {
        margin-bottom: 10vh;
    }
`

const IntroTitle = styled(Typography)`
    font-size: 2.8rem !important;
    font-weight: bold !important;
    margin-bottom: 2vh !important;
`

const IntroSubtitle = styled(Typography)`
    font-size: 1.6rem !important;
    font-weight: 400 !important;
`

const Loop = () => {
    return (
        <TextLoop delay={2000} interval={[1200,1200,1200,1200,1200,2200]}>
            <IntroLoopedText>curieux</IntroLoopedText>
            <IntroLoopedText>enthousiaste</IntroLoopedText>
            <IntroLoopedText>passionné</IntroLoopedText>
            <IntroLoopedText>ingénieux</IntroLoopedText>
            <IntroLoopedText>tolérant</IntroLoopedText>
            <IntroLoopedText>Anthony</IntroLoopedText>
        </TextLoop>
    )
}

const CustomIntro = () => {
    const image = useStaticQuery(graphql`
        query image {
            file(relativePath: {eq: "goupil_vertical_white_with_icon_logo.png"}) {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `)
    console.log(image.file.childImageSharp.fluid)
    return (
        <IntroContainer>
            <Bounce top>
                <IntroImg fluid={image.file.childImageSharp.fluid} />
            </Bounce>
            <Slide left cascade delay={700}>
                <div>
                    <IntroTitle variant="h1">Bonjour, je suis <Loop />.</IntroTitle>
                    <IntroSubtitle variant="p">Ingénieur Python, spécialisé Backend / Data</IntroSubtitle>
                </div>
            </Slide>
        </IntroContainer>
    )
}

export default CustomIntro