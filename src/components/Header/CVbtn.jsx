import React from 'react'
import CV from "../../assests/Ulises Gallardo Rodríguez.pdf"

const CVbtn = () => {
  return (
    <>
    <a href={CV} download className='btn'>Download CV</a>
    </>
  )
}

export default CVbtn