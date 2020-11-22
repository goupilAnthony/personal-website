import React, { Fragment } from 'react'
import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import ProjectCard from './CustomProjectCard'
import Emoji from './Emoji'
import Slide from 'react-reveal/Slide'

const CustomTitre = styled(Typography)`
    font-weight: 800 !important;
    margin-bottom: 8vh !important;
    text-shadow: 0px 7px 16px black !important;
`

const cards = [
    {
        title: "Cryptopolitain",
        emoji: "📈",
        content: `Création d'un système de collecte quotidienne de données provenants d'APIs à destination d'une base de données PostgreSQL.\n
        Architecture Google Cloud:
        \t- Cloud Scheduler (cron jobs pour déclencher des actions)
        \t- PubSub (faire transiter des messages entre les fonctions)
        \t- Cloud Functions (fonctions  d'execution de code)
        \t- Cloud SQL (serveur PostgreSQL)
        Language: Python`,
        link: "https://www.lecryptopolitain.fr/",
        tooltip: "Site web du Cryptopolitain"
    },
    {
        title: "Cool Parents Make Happy Kids",
        emoji: "👶",
        content: "...",
        link: "",
        tooltip: ""
    },
    {
        title: "Orange",
        emoji: "📺",
        content: "...",
        link: "",
        tooltip: ""
    }
]

const CustomSecondSection = () => {
    console.log(cards)
    return (
        <Fragment>
            <CustomTitre variant="h3"><Emoji symbol="✔️" size="1.8rem"/> Projets</CustomTitre>
            <Grid container spacing={3}>
                {cards.map(({title, emoji, content, link, tooltip}, index) => {
                    var slideLeft = index%2 === 0 ? true : false 
                    var slideRight =  index%2 === 0 ? false : true 
                    console.log(title, slideLeft, slideRight)
                    return (
                        <Grid item xs={12} sm={6} key={index}>
                            <Slide left={slideLeft} right={slideRight}>
                                    <ProjectCard title={title} emoji={emoji} content={content} link={link} tooltip={tooltip}/>
                            </Slide>
                        </Grid>
                        )
                })}
            </Grid>
        </Fragment>
    )
}

export default CustomSecondSection