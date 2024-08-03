import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import "./Responsive.css"
import Home from './Component/Pages/Home'
import Sidebar from './Component/Sidebar'
import ColorChange from './Component/ColorChange'
import About from './Component/Pages/About'
import Card from './Component/Card'
import Services from './Component/Pages/Services'
import Contact from './Component/Pages/Contact'

function App() {
  const [full, setFull] = useState(false)
  function barClicked() {
    setFull(!full)
  }
  return (
    <>
      {/* <Home full={full} setFull={setFull} barClicked={barClicked}/>
    <About full={full} setFull={setFull} barClicked={barClicked}/> */}
      <Router>
        <Sidebar full={full} setFull={setFull} barClicked={barClicked} />
        <ColorChange />
        <Routes>
          <Route path='/' element={<Home full={full} setFull={setFull} barClicked={barClicked} />} />
          <Route path='about' element={<About full={full} setFull={setFull} barClicked={barClicked} />} />
          <Route path='services' element={<Services full={full} setFull={setFull} barClicked={barClicked}/>} />
          <Route path='portfolio' element={<About full={full} setFull={setFull} barClicked={barClicked} />} />
          <Route path='contact' element={<Contact full={full} setFull={setFull} barClicked={barClicked} />} />
        </Routes>
        {/* <div className="section">
          <div className="container-fluid">
            <div className="row g-4 gx-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div> */}
      </Router>
    </>
  )
}

export default App
