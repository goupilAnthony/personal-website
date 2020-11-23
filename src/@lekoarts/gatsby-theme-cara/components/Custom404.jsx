import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Background404 = styled(Typography)`

`

const Custom404 = () => {
    return (
        <>
            <Background404 variant="body2" align="center" >404</Background404>
        </>
    )
}

export default Custom404