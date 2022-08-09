import "./header.css"
import React from 'react'
import CVbtn from "./CVbtn"
import HeaderSocial from "./HeaderSocial"
import Img from "../../assests/img.png"
import TrackVisibility from 'react-on-screen';
import 'animate.css';


const Header = () => {
  return (
    <>
      <section>
        <div className="container header__container">
          <h3>Hello There! I'm</h3>
          <h1 className="">Ulises Gallardo Rodríguez <HeaderSocial/></h1> 
          <CVbtn/>
           
                <TrackVisibility>
                  {({isVisible})=>
                   <div className="main__img">
                          <a href="https://www.freepik.com/vectors/software-solutions"> 
                              <img src={Img} className= {isVisible ? "animate__animated animate__bounce":""}></img> 
                          </a>
                    </div>
                  }
                </TrackVisibility>
                
             
          

        </div>
      </section>
    </>
  )
}

export default Header