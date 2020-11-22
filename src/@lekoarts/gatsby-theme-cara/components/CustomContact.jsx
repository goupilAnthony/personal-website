import React from 'react'
import Slide from 'react-reveal/Slide'
import { Typography } from '@material-ui/core'
import Emoji from './Emoji'
import styled from 'styled-components'

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
        </>
    )
}

export default Contact