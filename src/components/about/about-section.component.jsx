import React from 'react'
import home1 from "../../img/home1.png"


const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
              <h2>We work to make</h2>
          </div>

          <div className="hide">
              <h2>Your <span>dreams</span> come </h2>
          </div>

          <div className="hide">
              <h2>true.</h2>
          </div>

        </div>

        <p>Contact us for any Project that you have.
           We have a professionals we will handle it
            with ease</p>

            <button>Contact Us</button>

      </div>

        <div className="image">
          <img src={home1} alt="A guy with a camera" />
        </div>

    </div>
  )
}

export default AboutSection
