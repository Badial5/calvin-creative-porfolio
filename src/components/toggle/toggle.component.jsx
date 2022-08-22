import {React, useState} from 'react'

import {motion} from "framer-motion";


const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(false)

    const buttonToggle = () => {

        setToggle(() => !toggle)
      }



  return (
    <motion.div layout className='question'  onClick={buttonToggle} >

        <motion.h4 layout>{title}</motion.h4>

      { toggle ? children : ''}

      <motion.div layout className="faq-line"></motion.div>
    </motion.div>
  )
} 

export default Toggle
