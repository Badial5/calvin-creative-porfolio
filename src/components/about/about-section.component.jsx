import React from 'react'
import home1 from "../../img/home1.png"


//Importing the style component

import { About, Description, Hide, Image } from "../../styles"


const AboutSection = () => {
  return (
    <About >
      <Description>
        <div className="title">
          <Hide>
              <h2>We work to make</h2>
          </Hide>

          <Hide>
              <h2>Your <span>dreams</span> come </h2>
          </Hide>

          <Hide>
              <h2>true.</h2>
          </Hide>

        </div>

        <p>Contact us for any Project that you have.
           We have a professionals we will handle it
            with ease</p>

            <button>Contact Us</button>

      </Description>

        <Image>
          <img src={home1} alt="A guy with a camera" />
        </Image>

    </About>
  )
}
 

//styled components






export default AboutSection
