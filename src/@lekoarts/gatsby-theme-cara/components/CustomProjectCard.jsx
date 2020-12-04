import React from 'react'
import { Paper, Typography, Divider, IconButton, Tooltip } from '@material-ui/core'
import styled from 'styled-components'
import Emoji from './Emoji'
import LaunchIcon from '@material-ui/icons/Launch'

const CustomPaper = styled(Paper)`
    background-color: #2d3748 !important;
    color: white !important;
`

const CardContent = styled(Typography)`
    padding: 20px 3% 0px 3% !important;
`

const CardDivider = styled(Divider)`
    background-color: #ffffff2e !important;
`

const CardLinkIcon = styled(IconButton)`
    color: #ffffff2e !important;
    position: relative !important;
    padding: 0px 5px 5px 5px !important;
    
`

const CardTitle = styled(Typography)`
    padding-top: 10px !important;
`

const ProjectCard = ({ title, emoji, content, link, tooltip }) => {
    return (
        <CustomPaper elevation={15}>
            <CardTitle variant="h5" align="center" gutterBottom ><Emoji symbol={emoji} size="1rem" /> {title}</CardTitle>
            <CardDivider light variant="middle" />
            <CardContent variant="body2" style={{whiteSpace: 'pre-line'}} component="p">
                {content}
            </CardContent>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
                <Tooltip title={tooltip}>
                    <CardLinkIcon href={link} target="_blank" rel="noreferrer noopener">
                        <LaunchIcon />
                    </CardLinkIcon>
                </Tooltip>
            </div>
        </CustomPaper>
    )
}

export default ProjectCard