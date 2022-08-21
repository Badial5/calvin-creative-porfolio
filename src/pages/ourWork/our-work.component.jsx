import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"


//images
import athlete from "../../img/athlete-small.png"
import theracer from "../../img/theracer-small.png"
import goodtimes from "../../img/goodtimes-small.png"

const OurWork = () => {
  return (
   <Work> 
    <Movie>
      <h2>The Athelete</h2>
      <div className="line"></div>
      
      <Link to='#' >
      <img src={athlete} alt='athetle' />
      </Link>


      <h2>The Racer</h2>
      <div className="line"></div>

      <Link to='#'>
      <img src={theracer} alt='theracer' />
      </Link>


      <h2>The Good TImes</h2>
      <div className="line"></div>

      <Link to='#'>
      <img src={goodtimes} alt='goodtimes' />
      </Link>

    </Movie>
  </Work>

    
  )
}


const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2{
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }

  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;






export default OurWork
