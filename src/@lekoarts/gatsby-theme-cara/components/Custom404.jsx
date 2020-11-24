import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Background404 = styled(Typography)`
    color: #d24747b3 !important;
    font-size: 6rem !important;
`

const Custom404 = () => {
    return (
        <>
            <Background404 variant="body2" align="center" >404</Background404>
            <Typography variant="body2" align="center">Je n'ai pas trouvé la page que tu as demandé !</Typography>
        </>
    )
}

export default Custom404