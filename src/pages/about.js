import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>
                Hi there! I'm the proud creator of this site, built using Gatsby.
                This is my blog to show what I've learned using D3.
            </p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
