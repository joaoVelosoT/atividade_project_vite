// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer
      contentEmail = "vitorvteixeira2023@gmail.com"
      contentLinkedin = "linkedin.com/joaovitor1804"
      contentGithub = "github.com/joaoVelosoT"
      />
    </>
   
  )
}

export default App
