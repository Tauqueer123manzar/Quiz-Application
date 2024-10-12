import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Quiz from './components/Quiz'
import Topbar from './components/Topbar'
import Home from './pages/Home'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/topbar' element={<Topbar/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
