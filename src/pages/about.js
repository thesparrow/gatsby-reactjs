/* Import react and other components such as CSS into page
 
*/

import React from "react"
import SEO from "../components/seo"
import  Layout  from  "../components/layout"
import  FancyParagraph  from  "../components/fancy-paragraph"



const AboutPage = () => (
    <Layout>
        <SEO title="About Me" /> 
        <h1> About me </h1>
       
        <FancyParagraph  paragraphText="Write some text and make sure it is up to date." />
        
    </Layout>
    

)

export default AboutPage