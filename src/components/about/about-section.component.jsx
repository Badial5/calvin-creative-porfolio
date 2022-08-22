import React from 'react'
import home1 from "../../img/home1.png"


//Importing the style component
import { About, Description, Hide, Image } from "../../styles"

//Framer Motion
import {motion} from 'framer-motion';

//
import { titleAnim, fade, photoAnim } from '../../framer-motion/animation';

//importing Wave

import Wave from '../Wave/wave.component';


const AboutSection = () => {

  // const titleAnim = {
  //   hidden: {opacity: 0},
  //   show: {opacity: 1, transition: {duration: 2}}
  // }



  // const container = {
  //   hidden: { x: 100 },
  //   show: {x: 0, transition: {duration: 4, ease: "easeOut",  staggerChildren: 0.75, when: "beforeChildren"  }},
  // }

  return (
    <About >
      <Description>
        <motion.div  initial="hidden" animate="show" className="title">
          <Hide>
              <motion.h2 variants={titleAnim }  >We work to make</motion.h2>
          </Hide>

          <Hide>
              <motion.h2 variants={titleAnim }  >Your <span>dreams</span> come </motion.h2>
          </Hide>

          <Hide>
              <motion.h2  variants={titleAnim } >true.</motion.h2>
          </Hide>

        </motion.div>

        <motion.p variants={fade} >Contact us for any Project that you have.
           We have a professionals we will handle it
            with ease</motion.p>

            <motion.button variants={fade}
             >Contact Us</motion.button>

      </Description>

        <Image >
          <motion.img variants={photoAnim} src={home1} alt="A guy with a camera" />
        </Image>
      <Wave />
    </About>
  )
}
 

//styled components






export default AboutSection
