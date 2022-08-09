import React from 'react'
import IMG0 from "../../assests/img0.png"
import IMG1 from "../../assests/project.png"
import IMG2 from "../../assests/img2.jpg"
import IMG3 from "../../assests/img3.jpg"
import "./projects.css"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const data = [
    {
        id:1,
        image:IMG0,
        title:"Tourist Recomendation System",
        github: 'https://github.com/UlisesGallardo/rest-mex_2022_tourist_recommendation',
        demo:''
    },
    {
        id:2,
        image:IMG3,
        title:"1942 Recreation using Unity 2D",
        github: '',
        demo:'https://ulisesgallardo.itch.io/1942-recreation-v1'
    },
    {
        id:3,
        image:IMG2,
        title:"VideoGames-Info",
        github: 'https://github.com/UlisesGallardo/VideoGames-Info',
        demo:''
    },
    {
        id:4,
        image:IMG1,
        title:"",
        github: '',
        demo:''
    }
]

const projects = () => {
  return (
    <section className='main_container_projects'>
        <h1 id="title">Projects</h1>
        <div className="projects__container animate__flip">
            {
                data.map(({id,image,title,github,demo}) =>{
                    return(
                        <TrackVisibility>
                        {({isVisible})=>
                            <article key={id} className= {isVisible ? "project__item animate__flip":"project__item"}>
                                <div className='project__item_image'>
                                    <img src={image} alt={title} className='image'></img>
                                </div>
                                <h3>{title}</h3>
                                <div className='project_item_btn'>
                                    <a href={github} className='btn' target="_blank">Github</a>
                                    {
                                    demo!='' && <a href={demo} className='btn btn-primary' target="_blank">Demo</a>
                                    }
                                </div>
                            </article>
                            }
                        </TrackVisibility>
                    )
                })
            }
              
        </div>
    </section>
  )
}

export default projects