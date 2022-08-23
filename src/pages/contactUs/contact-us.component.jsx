import React from 'react'

//importing Motions 

import {motion} from "framer-motion";
import { PageAnimation, titleAnim } from '../../framer-motion/animation';
import styled from 'styled-components';



const ContactUs = () => {
  return (
    <ContactStyle exit="exit" 
    variants={PageAnimation}
    initial="hidden" animate="show"
    style={{background: "#fff"}}
    >
     <Title> 
      
      <Hide>
        <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
      </Hide>
      
      </Title>

      <div>

        <Hide>
        <Social variants={titleAnim} >
          <Circle />
          <h2>Send Us A Message</h2>
        </Social>
        </Hide>

        <Social variants={titleAnim} >
          <Circle />
          <h2>Send an Email</h2>
        </Social>

        <Social variants={titleAnim} >
          <Circle />
          <h2>Social Media</h2>
        </Social>
      </div>



    </ContactStyle>
  )
}


// Styled Component

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1500px){
        margin-top: 2rem ;
        padding: 2rem;
        font-size: 1rem;
    }
`;


const Title = styled.div`
  margin-bottom: 4rem;
  color: black;

  @media (max-width: 1500px){
        margin-top: 5rem;
    }
`


const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;


const Social = styled(motion.div)`

display: flex;
align-items: center;

h2{
  margin: 2rem;
}
`


export default ContactUs
