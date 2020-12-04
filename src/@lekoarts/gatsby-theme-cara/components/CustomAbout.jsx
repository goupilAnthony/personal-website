import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import Emoji from './Emoji'

const AboutTitle = styled(Typography)`
    font-weight: bold !important;
    margin-bottom: 4vh !important;
    text-shadow: 0px 7px 16px black !important;
`
const AboutIntro = styled(Typography)`
    color: #ffffff7a !important;
    margin-bottom: 2vh !important;
`

const About = () => {
    return (
        <>
            <AboutTitle variant="h3"><Emoji symbol="📝" label="clipboard" /> A propos</AboutTitle>
            
            <AboutIntro variant="body2" >
                On entend souvent dire que le monde à aboli les frontières grâce aux nouvelles technologies, pour le meilleur et pour le pire.<br/>
                Je crois qu'il ne tiens qu'à nous de faire vivre des projets ambitieux et positifs afin de faire pencher la balance côté positif.
            </AboutIntro>
            
            <Typography>
                <Emoji symbol="👋" label="greeting" /> J'ai aujourd'hui 25 ans, j'ai commencé mon périple en tant que Soldat du 54RT, régiment de guerre électronique. Je suis ensuite passé par de multiples métiers comme plombier ou barman.
                <br/>
                <br/>
                Ces expériences on fait de moi un aventurier de la vie. J'aime découvrir de nouvelles choses, et quoi de mieux que la vaste monde de l'informatique pour satisfaire ma soif d'inconnu.
                <br/>
                <br/>
                <Emoji symbol="💻" label="computer" /> J'ai appris à développer grâce à internet, seul dans ma chambre mais entouré sur la toile. Grâce à ces compétences j'ai eu la chance d'intégrer la première promotion de l'école IA Microsoft<Emoji symbol="🤖" label="brain"/> en Septembre 2019.
                <br/>
                <br/>
                Aujourd'hui je travaille pour des cabinets de conseil ainsi qu'en indépendant.
            </Typography>
        </>
    )
}

export default About