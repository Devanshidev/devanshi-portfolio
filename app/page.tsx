import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Header from './components/Header'
const page = () => {
  return (
    <div>
      <Header/>
       <section id="home"> <Home /></section>
     
      <section id ="about">
      <About/>
      </section>
      <section id="projects"><Projects/></section>
      <section id="experience"><Experience/></section>
      <section id="skills"><Skills/></section>
      <section id="contact"><Contact/></section>
      
    </div>
  )
}

export default page