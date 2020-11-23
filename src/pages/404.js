import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Hero from "../@lekoarts/gatsby-theme-cara/components/hero"
import styled from 'styled-components'
import CustomHero404 from '../@lekoarts/gatsby-theme-cara/components/CustomHero404'
import CustomFooterLayout from '../@lekoarts/gatsby-theme-cara/components/CustomFooterLayout'

const UnknowPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #141821;
`

const Unknow = () => {
    return (
        <Layout>
            <Parallax pages={1}>
                <CustomHero404 offset={0} factor={1} />
                <CustomFooterLayout />
            </Parallax>
        </Layout>
    )
}

export default Unknow