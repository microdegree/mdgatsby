import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/services"
import AboutPanel from "../components/about-panel"
import Testimonials from "../components/testimonials"
import Courses from "../components/courses"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import Reviews from "../components/review"
import Recognation from "../components/recognation"


const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="" />

        <Hero />
        <Courses />
        <Reviews/>
        <Services />
        <Recognation/>
    
        {/* <Testimonials /> */}
   
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
