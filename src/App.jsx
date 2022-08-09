import React from 'react'
import Header from "./components/Header/header"
import Nav from "./components/Nav/nav.jsx"
import Footer from "./components/Footer/footer.jsx"
import Projects from "./components/Projects/projects.jsx"


export const App = () => {
  return (
    <div className='main_container'>
      <Header/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
