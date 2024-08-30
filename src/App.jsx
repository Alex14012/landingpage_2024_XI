import { useState } from 'react'
import './App.css'
import NavBar from "./components/navbar"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-Beige">
    <NavBar/>
    <Header/>
    <MainContent/>
    <Footer/>
    </div>
  )
}

export default App
