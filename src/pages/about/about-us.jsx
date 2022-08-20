import React from 'react'
//import aboutsection
import ServiceSection from '../../components/service/serviceSection'

import AboutSection from '../../components/about/about-section.component'

import FaqSection from '../../components/faq/faqSection.component'


const AboutUs = () => {
  return (
    <div>
      <AboutSection />

      <ServiceSection />

      <FaqSection />
    </div>
  )
}

export default AboutUs
