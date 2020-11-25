import React from 'react'
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import CustomHero404 from '../@lekoarts/gatsby-theme-cara/components/CustomHero404'
import CustomFooterLayout from '../@lekoarts/gatsby-theme-cara/components/CustomFooterLayout'



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