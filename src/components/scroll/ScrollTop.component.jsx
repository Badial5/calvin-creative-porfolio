import React from 'react'

import { useEffect } from 'react'
import {useLocation} from "react-router-dom"


const ScrollTop = () => {

    const { pathname } = useLocation();
    console.log(pathname)

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0
        })
    }, [pathname])


    return null;

  return (
    <>
    
    </>
  )


}

export default ScrollTop
