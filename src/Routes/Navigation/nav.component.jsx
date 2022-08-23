//


//Navigation components
import { Outlet, Link } from "react-router-dom"


//import styled component
import styled from 'styled-components';


const Nav = () => {
  return (
    <>
    <StyledNav>

        <Link id="logo" to='/' >Digital Star</Link>

        <ul>

            <Link className="li" to='work'>
                Our Work
            </Link> 

            <Link className="li" to='contact'>
                Contact Us
            </Link>

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
    padding: 1rem 10rem;
    background: #282828;
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

    .li {
        padding-left: 10rem;
        position: relative;
    }

    @media (max-width: 1300px){

        flex-direction: column;
        padding: 2rem 1rem;

        #logo {
            display: inline-block;
            /* margin: 2rem; */
        }

        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;

            li{
                padding: 0;
            }
        }
    }

`;








export default Nav
