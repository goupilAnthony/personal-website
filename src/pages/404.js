import React from 'react'
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout"
import Hero from "../@lekoarts/gatsby-theme-cara/components/hero"
import styled from 'styled-components'

const UnknowPage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #141821;
`

const Unknow = () => {
    return (
        <Layout>
            <Hero />
        </Layout>
    )
}

export default Unknow