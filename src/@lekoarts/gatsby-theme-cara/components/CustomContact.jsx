import React from 'react'
import Slide from 'react-reveal/Slide'
import { Typography, Grid } from '@material-ui/core'
import Emoji from './Emoji'
import styled from 'styled-components'
import Form from './Formspree'

const ContactTitle = styled(Typography)`
    font-weight: 800 !important;
    margin-bottom: 8vh !important;
    text-shadow: 0px 7px 16px black !important;
`

const Contact = () => {

    return (
        <>
            <Slide left>
                <ContactTitle variant="h3"><Emoji symbol="💌" label="letter"/> Contact</ContactTitle>
            </Slide>
            <Form/>
        </>
    )
}

export default Contact