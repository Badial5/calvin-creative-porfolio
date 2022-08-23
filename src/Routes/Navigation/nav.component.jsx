//


//Navigation components
import { motion } from "framer-motion";
import { Outlet, Link, useLocation } from "react-router-dom"

//import styled component
import styled from 'styled-components';


const Nav = () => {

    const {pathname} = useLocation();

  return (
    <>
    <StyledNav>

        <Link id="logo" to='/' >Digital Star</Link>

        <ul>
            <li>
            <Link  to='work'>
                Our Work
            </Link> 
            <Line transition={{duration: 0.76}} 
            initial={{ width: "0%"}} animate={{width: pathname === "/work" ? "50%" : "0%" }} 
            />
            
            </li>


            <li>
            <Link  to='contact'>
                Contact Us
            </Link>
            <Line transition={{duration: 0.76}} 
            initial={{ width: "0%"}} animate={{width: pathname === "/contact" ? "50%" : "0%" }} 
            />
            
            </li>

        </ul>


    </StyledNav>

    <Outlet />

    </>
  )
}








// Navigation Styles component

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;

    a{
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive, sans-serif;
        font-weight: lighter;
    }

    li {
        padding-left: 10rem;
        position: relative;
    }

    @media (max-width: 1500px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1500px) {
    left: 0%;
  }
`;







export default Nav
