import React from 'react'

//importing Motions 

import {motion} from "framer-motion";
import { PageAnimation } from '../../framer-motion/animation';


const ContactUs = () => {
  return (
    <motion.div exit="exit" variants={PageAnimation}
     initial="hidden" animate="show"
     style={{background: "#fff"}}>
      Contact Us
    </motion.div>
  )
}

export default ContactUs
