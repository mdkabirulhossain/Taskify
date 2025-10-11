import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[7vw]'>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
