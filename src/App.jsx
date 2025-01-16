import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Home from './Pages/Home/Home'
import Mobileheader from './Components/Home/Mobileheader'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    {/* <Mobileheader/> */}
    <Home/>
    <Footer/>
    
  
    </>
  )
}

export default App
