import React from 'react'
//import aboutsection
import ServiceSection from '../../components/service/serviceSection'

import AboutSection from '../../components/about/about-section.component'

import FaqSection from '../../components/faq/faqSection.component'

//importing Motions 

import {motion} from "framer-motion";
import { PageAnimation } from '../../framer-motion/animation';

const AboutUs = () => {
  return (
    <motion.div exit="exit" variants={PageAnimation}
     initial="hidden" animate="show" >
      <AboutSection />

      <ServiceSection />

      <FaqSection />
    </motion.div>
  )
}

export default AboutUs
