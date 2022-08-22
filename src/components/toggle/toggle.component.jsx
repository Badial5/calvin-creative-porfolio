import {React, useState} from 'react'

const Toggle = ({children}) => {

    const [toggle, setToggle] = useState(true)

    const buttonToggle = () => {

        setToggle(() => !toggle)
      }



  return (
    <div onClick={buttonToggle} >
      { toggle ? children : ''}
    </div>
  )
}

export default Toggle
